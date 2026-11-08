import { CURRICULA, DISABILITY_PROFILES, GRADES, SUBJECTS } from '../data/curriculumData.js';

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
  activeTab: 'interactive',
  scores: { teamA: 0, teamB: 0 },
  selectedVoice: null,

  // Concept Clip State
  clipPlaying: false,
  clipStepIndex: 0,
  clipInterval: null,
  clipElapsed: 0
};

// DOM References
const elements = {
  selCurriculum: document.getElementById('selCurriculum'),
  selDisability: document.getElementById('selDisability'),
  selGrade: document.getElementById('selGrade'),
  selSubject: document.getElementById('selSubject'),
  selTopic: document.getElementById('selTopic'),
  
  adaptationTitle: document.getElementById('adaptationTitle'),
  adaptationText: document.getElementById('adaptationText'),
  
  btnThemeToggle: document.getElementById('btnThemeToggle'),
  themeIcon: document.getElementById('themeIcon'),
  themeText: document.getElementById('themeText'),
  
  btnDyslexia: document.getElementById('btnDyslexia'),
  btnProjector: document.getElementById('btnProjector'),
  btnTts: document.getElementById('btnTts'),
  currentPathBreadcrumb: document.getElementById('currentPathBreadcrumb'),
  
  // Interactive Task
  taskPrompt: document.getElementById('taskPrompt'),
  taskContainer: document.getElementById('taskContainer'),
  taskOptions: document.getElementById('taskOptions'),
  taskFeedback: document.getElementById('taskFeedback'),

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
  initializeIndianSpeechVoice();
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
    elements.themeIcon.className = 'fa-solid fa-sun';
    elements.themeText.innerText = 'Light';
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    elements.themeIcon.className = 'fa-solid fa-moon';
    elements.themeText.innerText = 'Dark';
  }
}

function toggleTheme() {
  const newTheme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

// ----------------------------------------------------
// Indian Accent Speech Synthesis Engine
// ----------------------------------------------------
function initializeIndianSpeechVoice() {
  if (!('speechSynthesis' in window)) return;

  function loadIndianVoice() {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    // Strict priority filter for Indian English Voices
    const indianVoice = voices.find(v => 
      v.lang === 'en-IN' || 
      v.lang.toLowerCase().replace('_', '-').startsWith('en-in') ||
      v.name.toLowerCase().includes('india') ||
      v.name.toLowerCase().includes('heera') ||
      v.name.toLowerCase().includes('neerja') ||
      v.name.toLowerCase().includes('ravi') ||
      v.name.toLowerCase().includes('veena')
    );

    if (indianVoice) {
      state.selectedVoice = indianVoice;
    } else {
      state.selectedVoice = voices.find(v => v.lang.includes('IN')) || 
                           voices.find(v => v.lang.startsWith('en')) || 
                           voices[0];
    }
  }

  loadIndianVoice();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadIndianVoice;
  }
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-IN';

  if (state.selectedVoice) {
    utterance.voice = state.selectedVoice;
  }
  
  utterance.rate = state.disability === 'ID' || state.disability === 'ASD' ? 0.82 : 0.86;
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
}

function updateUI() {
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

function renderInteractiveTask(topicObj) {
  elements.taskPrompt.innerText = topicObj.taskPrompt;
  elements.taskFeedback.innerHTML = '';

  elements.taskContainer.innerHTML = topicObj.taskItems.map(item => `
    <div class="px-6 py-4 surface-card rounded-xl text-2xl font-bold tracking-tight shadow-sm flex items-center justify-center min-w-[100px]">
      ${item}
    </div>
  `).join('');

  elements.taskOptions.innerHTML = topicObj.options.map(opt => `
    <button onclick="handleAnswerChoice('${opt}')" class="btn-secondary py-3.5 px-6 rounded-xl text-lg font-bold tracking-tight transition transform hover:-translate-y-0.5 active:scale-98">
      ${opt}
    </button>
  `).join('');
}

function renderGroupGame(topicObj) {
  const g = topicObj.gameChallenge;
  elements.gameTitle.innerText = g.title;
  elements.gameInstruction.innerText = g.instruction;
  elements.gameCardLeft.innerText = g.left;
  elements.gameCardRight.innerText = g.right;
}

// ----------------------------------------------------
// Fully Working Concept Clip Player
// ----------------------------------------------------
function getCurrentTopic() {
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
      const totalDur = topicObj.clipSteps.reduce((acc, s) => acc + s.duration, 0);
      elements.clipTimeDisplay.innerText = `00:00 / 00:${totalDur.toString().padStart(2, '0')}`;
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

  // If at the end, restart from step 0
  if (state.clipStepIndex >= topicObj.clipSteps.length) {
    state.clipStepIndex = 0;
    state.clipElapsed = 0;
  }

  showCurrentClipStep();

  // Progress timer
  const totalDuration = topicObj.clipSteps.reduce((acc, s) => acc + s.duration, 0);

  clearInterval(state.clipInterval);
  state.clipInterval = setInterval(() => {
    state.clipElapsed++;
    
    // Progress calculation
    const pct = Math.min(100, Math.round((state.clipElapsed / totalDuration) * 100));
    elements.clipProgressBar.style.width = `${pct}%`;
    elements.clipTimeDisplay.innerText = `00:${state.clipElapsed.toString().padStart(2, '0')} / 00:${totalDuration.toString().padStart(2, '0')}`;

    // Step calculation
    let accumulated = 0;
    let targetIndex = 0;
    for (let i = 0; i < topicObj.clipSteps.length; i++) {
      accumulated += topicObj.clipSteps[i].duration;
      if (state.clipElapsed < accumulated) {
        targetIndex = i;
        break;
      }
      targetIndex = i;
    }

    if (targetIndex !== state.clipStepIndex && targetIndex < topicObj.clipSteps.length) {
      state.clipStepIndex = targetIndex;
      showCurrentClipStep();
    }

    if (state.clipElapsed >= totalDuration) {
      pauseConceptClip();
      state.clipStepIndex = 0;
    }
  }, 1000);
}

function showCurrentClipStep() {
  const topicObj = getCurrentTopic();
  const step = topicObj.clipSteps[state.clipStepIndex];
  if (!step) return;

  elements.clipVisualStage.innerHTML = step.visualHtml;
  elements.clipCaptionDisplay.innerText = step.caption;
  
  // Speak the step caption in Indian English accent
  speakText(step.caption);
}

function pauseConceptClip() {
  state.clipPlaying = false;
  elements.clipPlayIcon.className = 'fa-solid fa-play ml-0.5';
  clearInterval(state.clipInterval);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function resetConceptClip() {
  pauseConceptClip();
  state.clipStepIndex = 0;
  state.clipElapsed = 0;
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
    elements.taskFeedback.innerHTML = `
      <div class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl surface-card border-l-4 border-l-emerald-500 font-semibold text-base shadow-sm">
        <i class="fa-solid fa-check text-emerald-600"></i>
        <span>${topicObj.successMessage}</span>
      </div>
    `;
    speakText(topicObj.successMessage);
  } else {
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

  // If leaving video tab, pause clip
  if (tab !== 'video' && state.clipPlaying) {
    pauseConceptClip();
  }

  document.querySelectorAll('.stage-tab-btn').forEach(btn => {
    const isTarget = btn.dataset.tab === tab;
    btn.className = `stage-tab-btn px-4 py-2 rounded-lg text-xs font-semibold tracking-tight transition ${
      isTarget ? 'tab-active' : 'tab-inactive'
    }`;
  });

  document.getElementById('paneInteractive').classList.toggle('hidden', tab !== 'interactive');
  document.getElementById('paneGame').classList.toggle('hidden', tab !== 'game');
  document.getElementById('paneVideo').classList.toggle('hidden', tab !== 'video');
}

// Run on document ready
document.addEventListener('DOMContentLoaded', initialize);
