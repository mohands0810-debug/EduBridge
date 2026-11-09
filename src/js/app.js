import { CURRICULA, DISABILITY_PROFILES, GRADES, SUBJECTS } from '../data/curriculumData.js';
import { sounds } from './soundEngine.js';

// Application State
const state = {
  theme: localStorage.getItem('edubridge_theme') || 'light', // 'light' or 'dark'
  curriculum: 'CBSE',
  disability: 'ADHD',
  grade: 2,
  subject: 'Math',
  topic: 'math_addition',
  isDyslexic: false,
  isProjectorMode: false,
  soundEffectsEnabled: true,
  activeTab: 'interactive',
  scores: { teamA: 0, teamB: 0 },
  selectedVoice: null,
  availableVoices: [],
  countedTaps: 0,

  // Concept Clip State
  clipPlaying: false,
  clipStepIndex: 0,
  clipTimeout: null
};

// DOM References
const elements = {
  selCurriculum: document.getElementById('selCurriculum'),
  selDisability: document.getElementById('selDisability'),
  selGrade: document.getElementById('selGrade'),
  selSubject: document.getElementById('selSubject'),
  selTopic: document.getElementById('selTopic'),
  selVoice: document.getElementById('selVoice'),
  
  adaptationTitle: document.getElementById('adaptationTitle'),
  adaptationText: document.getElementById('adaptationText'),
  
  btnThemeToggle: document.getElementById('btnThemeToggle'),
  themeIcon: document.getElementById('themeIcon'),
  themeText: document.getElementById('themeText'),
  
  btnSoundToggle: document.getElementById('btnSoundToggle'),
  soundIcon: document.getElementById('soundIcon'),
  
  btnDyslexia: document.getElementById('btnDyslexia'),
  btnProjector: document.getElementById('btnProjector'),
  btnTts: document.getElementById('btnTts'),
  currentPathBreadcrumb: document.getElementById('currentPathBreadcrumb'),
  
  // Interactive Task
  taskPrompt: document.getElementById('taskPrompt'),
  taskContainer: document.getElementById('taskContainer'),
  taskOptions: document.getElementById('taskOptions'),
  taskFeedback: document.getElementById('taskFeedback'),
  countedBadge: document.getElementById('countedBadge'),

  // Game
  gameTitle: document.getElementById('gameTitle'),
  gameInstruction: document.getElementById('gameInstruction'),
  gameCardLeft: document.getElementById('gameCardLeft'),
  gameCardRight: document.getElementById('gameCardRight'),
  scoreTeamA: document.getElementById('scoreTeamA'),
  scoreTeamB: document.getElementById('scoreTeamB'),

  // Concept Clip Player
  videoTitle: document.getElementById('videoTitle'),
  videoSubtitle: document.getElementById('videoSubtitle'),
  clipVisualStage: document.getElementById('clipVisualStage'),
  clipCaptionDisplay: document.getElementById('clipCaptionDisplay'),
  clipProgressBar: document.getElementById('clipProgressBar'),
  clipTimeDisplay: document.getElementById('clipTimeDisplay'),
  btnPlayClip: document.getElementById('btnPlayClip'),
  clipPlayIcon: document.getElementById('clipPlayIcon'),
  btnResetClip: document.getElementById('btnResetClip')
};

// Application Initialization
function initialize() {
  applyTheme(state.theme);
  initializeSpeechVoices();
  populateDropdowns();
  setupEventListeners();
  updateUI();
}

// ----------------------------------------------------
// Theme Management (Black & White Minimalist System)
// ----------------------------------------------------
function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem('edubridge_theme', theme);

  if (theme === 'dark') {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    elements.themeIcon.className = 'fa-solid fa-sun text-xs sm:text-sm';
    elements.themeText.innerText = 'Light';
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    elements.themeIcon.className = 'fa-solid fa-moon text-xs sm:text-sm';
    elements.themeText.innerText = 'Dark';
  }
}

function toggleTheme() {
  const newTheme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

// ----------------------------------------------------
// Sound Effects Toggle
// ----------------------------------------------------
function toggleSoundEffects() {
  state.soundEffectsEnabled = !state.soundEffectsEnabled;
  if (state.soundEffectsEnabled) {
    elements.soundIcon.className = 'fa-solid fa-bell text-xs sm:text-sm';
    elements.btnSoundToggle.title = 'Sound Effects: ON';
    sounds.playTap(3);
  } else {
    elements.soundIcon.className = 'fa-solid fa-bell-slash text-xs sm:text-sm opacity-50';
    elements.btnSoundToggle.title = 'Sound Effects: MUTED';
  }
}

// ----------------------------------------------------
// Crystal-Clear Studio Speech Engine
// ----------------------------------------------------
function initializeSpeechVoices() {
  if (!('speechSynthesis' in window)) return;

  function loadVoices() {
    const rawVoices = window.speechSynthesis.getVoices();
    if (!rawVoices || rawVoices.length === 0) return;

    // Filter for clear English voices (prioritizing neural, natural, studio voices)
    state.availableVoices = rawVoices.filter(v => 
      v.lang.startsWith('en') || v.lang.startsWith('hi')
    );

    if (state.availableVoices.length === 0) {
      state.availableVoices = rawVoices;
    }

    // Rank voices by clarity and modern neural quality
    state.availableVoices.sort((a, b) => {
      const score = (v) => {
        let s = 0;
        const name = v.name.toLowerCase();
        if (name.includes('natural') || name.includes('online (natural)')) s += 100;
        if (name.includes('neural')) s += 90;
        if (name.includes('google us english') || name.includes('google uk english')) s += 80;
        if (name.includes('jenny') || name.includes('aria') || name.includes('samantha')) s += 70;
        if (name.includes('zira') || name.includes('guy')) s += 50;
        if (name.includes('india') || v.lang === 'en-IN') s += 40;
        return s;
      };
      return score(b) - score(a);
    });

    // Populate Voice Dropdown
    if (elements.selVoice) {
      elements.selVoice.innerHTML = state.availableVoices.map((v, i) => {
        let cleanName = v.name
          .replace('Microsoft ', '')
          .replace('Google ', '')
          .replace('Online (Natural) - ', '')
          .replace('English (United States)', 'US')
          .replace('English (United Kingdom)', 'UK')
          .replace('English (India)', 'IN');
        return `<option value="${i}">${cleanName}</option>`;
      }).join('');

      state.selectedVoice = state.availableVoices[0];
      elements.selVoice.value = "0";

      elements.selVoice.onchange = (e) => {
        const idx = parseInt(e.target.value);
        state.selectedVoice = state.availableVoices[idx];
        speakText("Voice selected.");
      };
    }
  }

  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  if (state.selectedVoice) {
    utterance.voice = state.selectedVoice;
    utterance.lang = state.selectedVoice.lang || 'en-US';
  } else {
    utterance.lang = 'en-US';
  }
  
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  window.speechSynthesis.speak(utterance);
}

// ----------------------------------------------------
// UI Navigation & Dropdown Handlers
// ----------------------------------------------------
function populateDropdowns() {
  elements.selCurriculum.innerHTML = CURRICULA.map(c => 
    `<option value="${c.id}" ${c.id === state.curriculum ? 'selected' : ''}>${c.name}</option>`
  ).join('');

  elements.selDisability.innerHTML = DISABILITY_PROFILES.map(d => 
    `<option value="${d.id}" ${d.id === state.disability ? 'selected' : ''}>${d.name}</option>`
  ).join('');

  elements.selGrade.innerHTML = GRADES.map(g => 
    `<option value="${g.id}" ${g.id === state.grade ? 'selected' : ''}>${g.name} (${g.ageRange})</option>`
  ).join('');

  elements.selSubject.innerHTML = SUBJECTS.map(s => 
    `<option value="${s.id}" ${s.id === state.subject ? 'selected' : ''}>${s.name}</option>`
  ).join('');

  updateTopicDropdown();
}

function updateTopicDropdown() {
  const currentSubj = SUBJECTS.find(s => s.id === state.subject) || SUBJECTS[0];
  elements.selTopic.innerHTML = currentSubj.topics.map(t => 
    `<option value="${t.id}" ${t.id === state.topic ? 'selected' : ''}>${t.title}</option>`
  ).join('');

  if (!currentSubj.topics.some(t => t.id === state.topic)) {
    state.topic = currentSubj.topics[0].id;
  }
}

function setupEventListeners() {
  elements.selCurriculum.addEventListener('change', (e) => {
    state.curriculum = e.target.value;
    updateUI();
  });

  elements.selDisability.addEventListener('change', (e) => {
    state.disability = e.target.value;
    updateUI();
  });

  elements.selGrade.addEventListener('change', (e) => {
    state.grade = parseInt(e.target.value);
    updateUI();
  });

  elements.selSubject.addEventListener('change', (e) => {
    state.subject = e.target.value;
    updateTopicDropdown();
    updateUI();
  });

  elements.selTopic.addEventListener('change', (e) => {
    state.topic = e.target.value;
    resetConceptClip();
    updateUI();
  });

  // Toolbar Actions
  elements.btnThemeToggle.addEventListener('click', toggleTheme);
  if (elements.btnSoundToggle) {
    elements.btnSoundToggle.addEventListener('click', toggleSoundEffects);
  }
  elements.btnDyslexia.addEventListener('click', toggleDyslexia);
  elements.btnProjector.addEventListener('click', toggleProjector);
  elements.btnTts.addEventListener('click', () => {
    const subjObj = SUBJECTS.find(s => s.id === state.subject);
    const topicObj = subjObj.topics.find(t => t.id === state.topic);
    speakText(`Class prompt: ${topicObj.taskPrompt}`);
  });

  // Stage Mode Tabs
  document.querySelectorAll('.stage-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      setStageTab(e.currentTarget.dataset.tab);
    });
  });

  // Concept Clip Player Buttons
  elements.btnPlayClip.addEventListener('click', togglePlayConceptClip);
  elements.btnResetClip.addEventListener('click', resetConceptClip);

  // Custom Activity Builder Modal
  const modalBuilder = document.getElementById('modalCustomBuilder');
  const btnOpenBuilder = document.getElementById('btnOpenCustomBuilder');
  const btnCloseBuilder = document.getElementById('btnCloseCustomBuilder');
  const btnCancelBuilder = document.getElementById('btnCancelCustomBuilder');
  const btnLaunchBuilder = document.getElementById('btnLaunchCustomBuilder');

  if (btnOpenBuilder && modalBuilder) {
    btnOpenBuilder.addEventListener('click', () => modalBuilder.classList.remove('hidden'));
    btnCloseBuilder.addEventListener('click', () => modalBuilder.classList.add('hidden'));
    btnCancelBuilder.addEventListener('click', () => modalBuilder.classList.add('hidden'));
    btnLaunchBuilder.addEventListener('click', launchCustomActivity);
  }
}

function launchCustomActivity() {
  const promptVal = document.getElementById('customPromptInput').value.trim() || 'How many items are displayed?';
  const tokenVal = document.getElementById('customTokenSelect').value || '⭐';
  const qtyVal = parseInt(document.getElementById('customQuantitySelect').value) || 4;
  const optionsRaw = document.getElementById('customOptionsInput').value.trim() || '2, 4, 6';
  const correctVal = document.getElementById('customCorrectInput').value.trim() || String(qtyVal);

  const optionsArr = optionsRaw.split(',').map(s => s.trim()).filter(Boolean);
  if (!optionsArr.includes(correctVal)) {
    optionsArr.push(correctVal);
  }

  const customTopic = {
    id: 'custom_user_topic',
    title: 'Custom Classroom Activity',
    description: 'Teacher on-the-fly customized prompt',
    taskPrompt: promptVal,
    taskItems: Array(qtyVal).fill(tokenVal),
    options: optionsArr,
    correctAnswer: correctVal,
    successMessage: `Fantastic! Exactly ${correctVal} ${tokenVal} items counted!`,
    gameChallenge: {
      title: 'Classroom Challenge',
      instruction: promptVal,
      left: `Team A (${tokenVal})`,
      right: `Team B (${tokenVal})`
    },
    videoTitle: 'Visual Demonstration',
    videoSubtitle: promptVal,
    clipSteps: [
      {
        duration: 4,
        caption: promptVal,
        visualHtml: `<div class="text-5xl sm:text-6xl flex flex-wrap justify-center gap-3">${Array(qtyVal).fill(`<span>${tokenVal}</span>`).join('')}</div>`
      },
      {
        duration: 4,
        caption: `Count with your teacher: Total equals ${correctVal}!`,
        visualHtml: `<div class="surface-card px-8 py-5 rounded-2xl text-3xl font-black">${correctVal} ${tokenVal}</div>`
      }
    ]
  };

  document.getElementById('modalCustomBuilder').classList.add('hidden');
  state.customActiveTopic = customTopic;

  document.getElementById('stageHeaderTitle').innerText = customTopic.title;
  document.getElementById('stageHeaderSub').innerText = customTopic.description;
  renderInteractiveTask(customTopic);
  renderGroupGame(customTopic);
  renderConceptClipInitial(customTopic);

  if (state.soundEffectsEnabled) {
    sounds.playSuccess();
  }
  speakText(`Custom activity ready: ${promptVal}`);
}

function updateUI() {
  state.customActiveTopic = null;
  const currObj = CURRICULA.find(c => c.id === state.curriculum);
  const disObj = DISABILITY_PROFILES.find(d => d.id === state.disability);
  const subjObj = SUBJECTS.find(s => s.id === state.subject);
  const topicObj = subjObj.topics.find(t => t.id === state.topic) || subjObj.topics[0];

  // 1. Breadcrumb
  elements.currentPathBreadcrumb.innerHTML = `
    <span class="font-medium">${currObj.name}</span> 
    <i class="fa-solid fa-chevron-right text-[10px] opacity-40"></i>
    <span class="font-medium">${disObj.name}</span> 
    <i class="fa-solid fa-chevron-right text-[10px] opacity-40"></i>
    <span>Grade ${state.grade}</span> 
    <i class="fa-solid fa-chevron-right text-[10px] opacity-40"></i>
    <span class="font-medium">${subjObj.name}</span>
    <i class="fa-solid fa-chevron-right text-[10px] opacity-40"></i>
    <span class="font-semibold underline decoration-zinc-400 underline-offset-4">${topicObj.title}</span>
  `;

  // 2. Pedagogical Strategy Indicator
  elements.adaptationTitle.innerHTML = `<i class="fa-solid ${disObj.icon} mr-1.5 opacity-70"></i> ${disObj.name} Strategy:`;
  elements.adaptationText.innerText = disObj.strategy;

  // 3. Stage Headers
  document.getElementById('stageHeaderTitle').innerText = topicObj.title;
  document.getElementById('stageHeaderSub').innerText = `${topicObj.description} • Adapted for classroom projection`;

  // 4. Render Active Content
  renderInteractiveTask(topicObj);
  renderGroupGame(topicObj);
  renderConceptClipInitial(topicObj);
}

// ----------------------------------------------------
// Interactive Visual Task & Tap-to-Count Engine
// ----------------------------------------------------
function renderInteractiveTask(topicObj) {
  elements.taskPrompt.innerText = topicObj.taskPrompt;
  elements.taskFeedback.innerHTML = '';
  state.countedTaps = 0;
  if (elements.countedBadge) {
    elements.countedBadge.innerText = 'Counted: 0';
  }

  // Render clickable tokens with count slots
  elements.taskContainer.innerHTML = topicObj.taskItems.map((item, idx) => `
    <div onclick="handleTokenTap(this, ${idx + 1})" 
         data-counted="false"
         class="token-item relative px-5 py-3.5 surface-card rounded-xl text-2xl font-bold tracking-tight shadow-sm flex items-center justify-center min-w-[90px] cursor-pointer select-none transition transform hover:-translate-y-1 hover:border-zinc-400 active:scale-95" 
         title="Tap to count">
      <span class="token-val">${item}</span>
      <span class="tap-badge hidden absolute -top-2 -right-2 w-6 h-6 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold text-xs flex items-center justify-center shadow-md animate-scale"></span>
    </div>
  `).join('');

  elements.taskOptions.innerHTML = topicObj.options.map(opt => `
    <button onclick="handleAnswerChoice('${opt}')" class="btn-secondary py-3 px-4 rounded-xl text-base sm:text-lg font-bold tracking-tight transition transform hover:-translate-y-0.5 active:scale-98">
      ${opt}
    </button>
  `).join('');
}

window.handleTokenTap = function(el) {
  const badge = el.querySelector('.tap-badge');
  const isCounted = el.getAttribute('data-counted') === 'true';

  if (!isCounted) {
    state.countedTaps++;
    el.setAttribute('data-counted', 'true');
    badge.innerText = state.countedTaps;
    badge.classList.remove('hidden');
    el.classList.add('ring-2', 'ring-zinc-900', 'dark:ring-zinc-100');

    if (state.soundEffectsEnabled) {
      sounds.playTap(state.countedTaps);
    }
    speakText(`${state.countedTaps}`);
  } else {
    // Untap
    el.setAttribute('data-counted', 'false');
    badge.classList.add('hidden');
    el.classList.remove('ring-2', 'ring-zinc-900', 'dark:ring-zinc-100');
    state.countedTaps = Math.max(0, state.countedTaps - 1);
  }

  if (elements.countedBadge) {
    elements.countedBadge.innerText = `Counted: ${state.countedTaps}`;
  }
};

window.resetItemTaps = function() {
  state.countedTaps = 0;
  if (elements.countedBadge) {
    elements.countedBadge.innerText = 'Counted: 0';
  }
  document.querySelectorAll('.token-item').forEach(el => {
    el.setAttribute('data-counted', 'false');
    const badge = el.querySelector('.tap-badge');
    if (badge) badge.classList.add('hidden');
    el.classList.remove('ring-2', 'ring-zinc-900', 'dark:ring-zinc-100');
  });
};

function renderGroupGame(topicObj) {
  const g = topicObj.gameChallenge;
  elements.gameTitle.innerText = g.title;
  elements.gameInstruction.innerText = g.instruction;
  elements.gameCardLeft.innerText = g.left;
  elements.gameCardRight.innerText = g.right;
}

// ----------------------------------------------------
// Fully Working Concept Clip Player (Audio-Synchronized)
// ----------------------------------------------------
function getCurrentTopic() {
  if (state.customActiveTopic) return state.customActiveTopic;
  const subjObj = SUBJECTS.find(s => s.id === state.subject);
  return subjObj.topics.find(t => t.id === state.topic) || subjObj.topics[0];
}

function renderConceptClipInitial(topicObj) {
  elements.videoTitle.innerText = topicObj.videoTitle;
  elements.videoSubtitle.innerText = topicObj.videoSubtitle;
  
  if (!state.clipPlaying) {
    const firstStep = topicObj.clipSteps ? topicObj.clipSteps[0] : null;
    if (firstStep) {
      elements.clipVisualStage.innerHTML = firstStep.visualHtml;
      elements.clipCaptionDisplay.innerText = firstStep.caption;
      elements.clipTimeDisplay.innerText = `Step 1 of ${topicObj.clipSteps.length}`;
      elements.clipProgressBar.style.width = '0%';
    }
  }
}

function togglePlayConceptClip() {
  if (state.clipPlaying) {
    pauseConceptClip();
  } else {
    playConceptClip();
  }
}

function playConceptClip() {
  const topicObj = getCurrentTopic();
  if (!topicObj.clipSteps || topicObj.clipSteps.length === 0) return;

  state.clipPlaying = true;
  elements.clipPlayIcon.className = 'fa-solid fa-pause';

  if (state.clipStepIndex >= topicObj.clipSteps.length) {
    state.clipStepIndex = 0;
  }

  playStepByIndex(state.clipStepIndex);
}

function playStepByIndex(index) {
  const topicObj = getCurrentTopic();
  if (!state.clipPlaying) return;

  if (index >= topicObj.clipSteps.length) {
    pauseConceptClip();
    state.clipStepIndex = 0;
    elements.clipProgressBar.style.width = '100%';
    elements.clipCaptionDisplay.innerText = 'Lesson complete! Click replay to watch again.';
    elements.clipTimeDisplay.innerText = `Completed`;
    if (state.soundEffectsEnabled) {
      sounds.playSuccess();
    }
    return;
  }

  state.clipStepIndex = index;
  const step = topicObj.clipSteps[index];

  elements.clipVisualStage.innerHTML = step.visualHtml;
  elements.clipCaptionDisplay.innerText = step.caption;

  const pct = Math.round(((index + 1) / topicObj.clipSteps.length) * 100);
  elements.clipProgressBar.style.width = `${pct}%`;
  elements.clipTimeDisplay.innerText = `Step ${index + 1} of ${topicObj.clipSteps.length}`;

  speakClipStep(step.caption, () => {
    if (!state.clipPlaying) return;

    state.clipTimeout = setTimeout(() => {
      if (state.clipPlaying) {
        playStepByIndex(index + 1);
      }
    }, 1100);
  });
}

function speakClipStep(text, onComplete) {
  if (!('speechSynthesis' in window)) {
    setTimeout(onComplete, 3500);
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  if (state.selectedVoice) {
    utterance.voice = state.selectedVoice;
    utterance.lang = state.selectedVoice.lang || 'en-US';
  } else {
    utterance.lang = 'en-US';
  }

  utterance.rate = 0.92;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  let finished = false;

  utterance.onend = () => {
    if (!finished) {
      finished = true;
      if (onComplete) onComplete();
    }
  };

  utterance.onerror = (e) => {
    if (!finished) {
      finished = true;
      if (onComplete) onComplete();
    }
  };

  window.speechSynthesis.speak(utterance);
}

function pauseConceptClip() {
  state.clipPlaying = false;
  elements.clipPlayIcon.className = 'fa-solid fa-play ml-0.5';
  clearTimeout(state.clipTimeout);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function resetConceptClip() {
  pauseConceptClip();
  state.clipStepIndex = 0;
  const topicObj = getCurrentTopic();
  renderConceptClipInitial(topicObj);
}

// ----------------------------------------------------
// Global Interaction Functions
// ----------------------------------------------------
window.handleAnswerChoice = function(chosen) {
  const subjObj = SUBJECTS.find(s => s.id === state.subject);
  const topicObj = subjObj.topics.find(t => t.id === state.topic);
  
  const isMatch = String(chosen).trim().toLowerCase() === String(topicObj.correctAnswer).trim().toLowerCase();

  if (isMatch) {
    if (state.soundEffectsEnabled) {
      sounds.playSuccess();
    }
    elements.taskFeedback.innerHTML = `
      <div class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl surface-card border-l-4 border-l-emerald-500 font-semibold text-base shadow-sm">
        <i class="fa-solid fa-check text-emerald-600"></i>
        <span>${topicObj.successMessage}</span>
      </div>
    `;
    speakText(topicObj.successMessage);
  } else {
    if (state.soundEffectsEnabled) {
      sounds.playRetry();
    }
    elements.taskFeedback.innerHTML = `
      <div class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl surface-card border-l-4 border-l-zinc-500 font-semibold text-base shadow-sm">
        <i class="fa-solid fa-arrow-rotate-right text-zinc-500"></i>
        <span>Let's count together and try one more time!</span>
      </div>
    `;
    speakText("Let's count together and try one more time!");
  }
};

window.awardTeamPoint = function(team) {
  if (team === 'A') state.scores.teamA++;
  if (team === 'B') state.scores.teamB++;

  elements.scoreTeamA.innerText = state.scores.teamA;
  elements.scoreTeamB.innerText = state.scores.teamB;

  if (state.soundEffectsEnabled) {
    sounds.playPoint();
  }
  speakText(`Point for Team ${team}. Well done!`);
};

function toggleDyslexia() {
  state.isDyslexic = !state.isDyslexic;
  document.body.classList.toggle('font-dyslexic', state.isDyslexic);
  elements.btnDyslexia.classList.toggle('btn-primary', state.isDyslexic);
  elements.btnDyslexia.classList.toggle('btn-secondary', !state.isDyslexic);
}

function toggleProjector() {
  state.isProjectorMode = !state.isProjectorMode;
  document.body.classList.toggle('projector-fullscreen', state.isProjectorMode);
  
  const icon = elements.btnProjector.querySelector('i');
  const span = elements.btnProjector.querySelector('span');

  if (state.isProjectorMode) {
    icon.className = 'fa-solid fa-compress';
    span.innerText = 'Exit Fullscreen';
  } else {
    icon.className = 'fa-solid fa-expand';
    span.innerText = 'Projector Mode';
  }
}

function setStageTab(tab) {
  state.activeTab = tab;

  if (tab !== 'video' && state.clipPlaying) {
    pauseConceptClip();
  }

  document.querySelectorAll('.stage-tab-btn').forEach(btn => {
    const isTarget = btn.dataset.tab === tab;
    btn.className = `stage-tab-btn px-2 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-semibold tracking-tight transition text-center ${
      isTarget ? 'tab-active' : 'tab-inactive'
    }`;
  });

  document.getElementById('paneInteractive').classList.toggle('hidden', tab !== 'interactive');
  document.getElementById('paneGame').classList.toggle('hidden', tab !== 'game');
  document.getElementById('paneVideo').classList.toggle('hidden', tab !== 'video');
}

// Run on document ready
document.addEventListener('DOMContentLoaded', initialize);
