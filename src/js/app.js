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
  currentQuestionIndex: 0,
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
  
  // Interactive Task & Multi-Question Navigation
  questionStepBadge: document.getElementById('questionStepBadge'),
  questionDots: document.getElementById('questionDots'),
  btnPrevQuestion: document.getElementById('btnPrevQuestion'),
  btnNextQuestion: document.getElementById('btnNextQuestion'),
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
// Unified Studio Speech Engine (English, Kannada, Hindi)
// ----------------------------------------------------
let currentTtsAudio = null;

function stopAllSpeech() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  if (currentTtsAudio) {
    currentTtsAudio.pause();
    currentTtsAudio.currentTime = 0;
    currentTtsAudio = null;
  }
}

function initializeSpeechVoices() {
  function loadVoices() {
    const rawVoices = ('speechSynthesis' in window) ? window.speechSynthesis.getVoices() : [];

    const englishVoices = rawVoices.filter(v => v.lang.startsWith('en'));
    const hindiVoices = rawVoices.filter(v => v.lang.startsWith('hi'));
    const kannadaVoices = rawVoices.filter(v => 
      v.lang.toLowerCase().startsWith('kn') || 
      v.name.toLowerCase().includes('kannada') ||
      v.name.toLowerCase().includes('gagan') ||
      v.name.toLowerCase().includes('sapna')
    );

    const voiceOptions = [];

    // 1. Natural US English
    const usVoice = englishVoices.find(v => 
      v.name.toLowerCase().includes('natural') || 
      v.name.toLowerCase().includes('neural') ||
      v.name.toLowerCase().includes('aria') ||
      v.name.toLowerCase().includes('jenny') ||
      v.name.toLowerCase().includes('google us')
    ) || englishVoices.find(v => v.lang === 'en-US') || englishVoices[0] || null;
    voiceOptions.push({ id: 'en_us', label: 'US English', voice: usVoice, lang: 'en-US' });

    // 2. UK English (if available)
    const ukVoice = englishVoices.find(v => v.lang === 'en-GB' || v.name.toLowerCase().includes('uk'));
    if (ukVoice) {
      voiceOptions.push({ id: 'en_uk', label: 'UK English', voice: ukVoice, lang: 'en-GB' });
    }

    // 3. Indian English (if available)
    const inVoice = englishVoices.find(v => v.lang === 'en-IN' || v.name.toLowerCase().includes('india'));
    if (inVoice) {
      voiceOptions.push({ id: 'en_in', label: 'India English', voice: inVoice, lang: 'en-IN' });
    }

    // 4. ALWAYS include Kannada (ಕನ್ನಡ)
    const knVoice = kannadaVoices[0] || null;
    voiceOptions.push({ id: 'kannada', label: 'ಕನ್ನಡ (Kannada)', voice: knVoice, lang: 'kn-IN' });

    // 5. ALWAYS include Hindi (हिन्दी)
    const hiVoice = hindiVoices[0] || null;
    voiceOptions.push({ id: 'hindi', label: 'हिन्दी (Hindi)', voice: hiVoice, lang: 'hi-IN' });

    // 6. Distinct desktop system voices (Zira, David, Mark)
    englishVoices.forEach(v => {
      const n = v.name.toLowerCase();
      if ((n.includes('zira') || n.includes('david') || n.includes('mark')) && !voiceOptions.some(o => o.voice === v)) {
        const cleanName = v.name.replace('Microsoft ', '').replace(' Desktop', '');
        voiceOptions.push({ id: 'voice_' + v.name, label: cleanName, voice: v, lang: v.lang });
      }
    });

    state.voiceOptions = voiceOptions;

    // Populate Dropdown
    if (elements.selVoice) {
      elements.selVoice.innerHTML = voiceOptions.map(opt => 
        `<option value="${opt.id}">${opt.label}</option>`
      ).join('');

      const savedChoice = localStorage.getItem('edubridge_selected_voice_id') || 'en_us';
      const matched = voiceOptions.find(o => o.id === savedChoice) || voiceOptions[0];
      state.currentVoiceOption = matched;
      elements.selVoice.value = matched.id;

      elements.selVoice.onchange = (e) => {
        const opt = state.voiceOptions.find(o => o.id === e.target.value) || state.voiceOptions[0];
        state.currentVoiceOption = opt;
        localStorage.setItem('edubridge_selected_voice_id', opt.id);

        if (opt.id === 'kannada') {
          speakText("ಕನ್ನಡ ಧ್ವನಿ ಸಿದ್ಧವಾಗಿದೆ.");
        } else if (opt.id === 'hindi') {
          speakText("हिंदी आवाज़ चुनी गई है।");
        } else {
          speakText("Voice selected.");
        }
      };
    }
  }

  loadVoices();
  if (window.speechSynthesis && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

function speakText(text, onComplete) {
  stopAllSpeech();
  if (!text) {
    if (onComplete) onComplete();
    return;
  }

  const isKannadaText = /[\u0C80-\u0CFF]/.test(text);
  const isHindiText = /[\u0900-\u097F]/.test(text);
  const mode = state.currentVoiceOption ? state.currentVoiceOption.id : 'en_us';

  const isKn = isKannadaText || mode === 'kannada' || (state.subject === 'Kannada' && !isHindiText);
  const isHi = isHindiText || mode === 'hindi';

  // 1. KANNADA SPEECH
  if (isKn) {
    const rawVoices = ('speechSynthesis' in window) ? window.speechSynthesis.getVoices() : [];
    const nativeKn = (state.currentVoiceOption?.voice && state.currentVoiceOption.lang.startsWith('kn'))
      ? state.currentVoiceOption.voice
      : rawVoices.find(v => 
          v.lang.toLowerCase().startsWith('kn') || 
          v.name.toLowerCase().includes('kannada') ||
          v.name.toLowerCase().includes('gagan') ||
          v.name.toLowerCase().includes('sapna')
        );

    if (nativeKn) {
      const u = new SpeechSynthesisUtterance(text);
      u.voice = nativeKn;
      u.lang = 'kn-IN';
      u.rate = 0.92;
      u.onend = () => { if (onComplete) onComplete(); };
      u.onerror = () => { if (onComplete) onComplete(); };
      window.speechSynthesis.speak(u);
      return;
    }

    // Audio stream for native Kannada pronunciation
    try {
      const q = encodeURIComponent(text.substring(0, 180));
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=kn&client=tw-ob&q=${q}`;
      const audio = new Audio(audioUrl);
      currentTtsAudio = audio;

      audio.onended = () => {
        currentTtsAudio = null;
        if (onComplete) onComplete();
      };
      audio.onerror = () => {
        currentTtsAudio = null;
        fallbackWebSpeech(text, 'kn-IN', onComplete);
      };
      audio.play().catch(() => {
        currentTtsAudio = null;
        fallbackWebSpeech(text, 'kn-IN', onComplete);
      });
      return;
    } catch (e) {
      fallbackWebSpeech(text, 'kn-IN', onComplete);
      return;
    }
  }

  // 2. HINDI SPEECH
  if (isHi) {
    const rawVoices = ('speechSynthesis' in window) ? window.speechSynthesis.getVoices() : [];
    const nativeHi = (state.currentVoiceOption?.voice && state.currentVoiceOption.lang.startsWith('hi'))
      ? state.currentVoiceOption.voice
      : rawVoices.find(v => v.lang.startsWith('hi'));

    if (nativeHi) {
      const u = new SpeechSynthesisUtterance(text);
      u.voice = nativeHi;
      u.lang = 'hi-IN';
      u.rate = 0.95;
      u.onend = () => { if (onComplete) onComplete(); };
      u.onerror = () => { if (onComplete) onComplete(); };
      window.speechSynthesis.speak(u);
      return;
    }

    try {
      const q = encodeURIComponent(text.substring(0, 180));
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=hi&client=tw-ob&q=${q}`;
      const audio = new Audio(audioUrl);
      currentTtsAudio = audio;
      audio.onended = () => { currentTtsAudio = null; if (onComplete) onComplete(); };
      audio.onerror = () => { currentTtsAudio = null; fallbackWebSpeech(text, 'hi-IN', onComplete); };
      audio.play().catch(() => { currentTtsAudio = null; fallbackWebSpeech(text, 'hi-IN', onComplete); });
      return;
    } catch (e) {
      fallbackWebSpeech(text, 'hi-IN', onComplete);
      return;
    }
  }

  // 3. ENGLISH / GENERAL SPEECH
  if (!('speechSynthesis' in window)) {
    if (onComplete) setTimeout(onComplete, 2500);
    return;
  }

  const u = new SpeechSynthesisUtterance(text);
  if (state.currentVoiceOption?.voice && state.currentVoiceOption.voice.lang.startsWith('en')) {
    u.voice = state.currentVoiceOption.voice;
    u.lang = state.currentVoiceOption.voice.lang || 'en-US';
  } else {
    const rawVoices = window.speechSynthesis.getVoices();
    const enVoice = rawVoices.find(v => 
      v.lang.startsWith('en') && (
        v.name.toLowerCase().includes('natural') || 
        v.name.toLowerCase().includes('neural') ||
        v.name.toLowerCase().includes('google us') ||
        v.name.toLowerCase().includes('aria') ||
        v.name.toLowerCase().includes('jenny')
      )
    ) || rawVoices.find(v => v.lang.startsWith('en'));

    if (enVoice) u.voice = enVoice;
    u.lang = enVoice?.lang || 'en-US';
  }

  u.rate = 0.95;
  u.pitch = 1.0;
  u.volume = 1.0;

  u.onend = () => { if (onComplete) onComplete(); };
  u.onerror = () => { if (onComplete) onComplete(); };

  window.speechSynthesis.speak(u);
}

function fallbackWebSpeech(text, lang, onComplete) {
  if (!('speechSynthesis' in window)) {
    if (onComplete) onComplete();
    return;
  }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.92;
  u.onend = () => { if (onComplete) onComplete(); };
  u.onerror = () => { if (onComplete) onComplete(); };
  window.speechSynthesis.speak(u);
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
    state.currentQuestionIndex = 0;
    updateUI();
  });

  elements.selDisability.addEventListener('change', (e) => {
    state.disability = e.target.value;
    state.currentQuestionIndex = 0;
    updateUI();
  });

  elements.selGrade.addEventListener('change', (e) => {
    state.grade = parseInt(e.target.value);
    state.currentQuestionIndex = 0;
    updateUI();
  });

  elements.selSubject.addEventListener('change', (e) => {
    state.subject = e.target.value;
    state.currentQuestionIndex = 0;
    updateTopicDropdown();
    updateUI();
  });

  elements.selTopic.addEventListener('change', (e) => {
    state.topic = e.target.value;
    state.currentQuestionIndex = 0;
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
    const topicObj = getCurrentTopic();
    const q = getCurrentQuestion(topicObj);
    const mode = state.currentVoiceOption ? state.currentVoiceOption.id : 'en_us';

    if (state.subject === 'Kannada' || mode === 'kannada') {
      const prompt = q.promptKn || q.taskPrompt;
      speakText(`ಪ್ರಶ್ನೆ: ${prompt}`);
    } else if (mode === 'hindi') {
      const prompt = q.promptHi || q.taskPrompt;
      speakText(`कक्षा प्रश्न: ${prompt}`);
    } else {
      speakText(`Class prompt: ${q.taskPrompt}`);
    }
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
  state.currentQuestionIndex = 0; // Reset to first question on any filter change
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
// Interactive Visual Task & Multi-Question Question Pool
// ----------------------------------------------------
function getCurrentQuestion(topicObj) {
  if (!topicObj) return null;
  const questions = topicObj.questions && topicObj.questions.length > 0 ? topicObj.questions : [topicObj];
  if (state.currentQuestionIndex >= questions.length) {
    state.currentQuestionIndex = 0;
  }
  if (state.currentQuestionIndex < 0) {
    state.currentQuestionIndex = 0;
  }
  return questions[state.currentQuestionIndex];
}

window.nextQuestion = function() {
  const topicObj = getCurrentTopic();
  const questions = topicObj.questions && topicObj.questions.length > 0 ? topicObj.questions : [topicObj];
  if (state.currentQuestionIndex < questions.length - 1) {
    state.currentQuestionIndex++;
  } else {
    state.currentQuestionIndex = 0; // Wrap around to question 1
  }
  renderInteractiveTask(topicObj);
  resetConceptClip();
  if (state.soundEffectsEnabled) {
    sounds.playTap(1);
  }
};

window.prevQuestion = function() {
  const topicObj = getCurrentTopic();
  const questions = topicObj.questions && topicObj.questions.length > 0 ? topicObj.questions : [topicObj];
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex--;
  } else {
    state.currentQuestionIndex = questions.length - 1;
  }
  renderInteractiveTask(topicObj);
  resetConceptClip();
  if (state.soundEffectsEnabled) {
    sounds.playTap(1);
  }
};

window.goToQuestion = function(idx) {
  const topicObj = getCurrentTopic();
  state.currentQuestionIndex = idx;
  renderInteractiveTask(topicObj);
  resetConceptClip();
  if (state.soundEffectsEnabled) {
    sounds.playTap(1);
  }
};

function renderInteractiveTask(topicObj) {
  const questions = topicObj.questions && topicObj.questions.length > 0 ? topicObj.questions : [topicObj];
  const q = getCurrentQuestion(topicObj);

  // 1. Question Step Indicator & Navigation Dots
  if (elements.questionStepBadge) {
    elements.questionStepBadge.innerText = `Question ${state.currentQuestionIndex + 1} of ${questions.length}`;
  }

  if (elements.questionDots) {
    elements.questionDots.innerHTML = questions.map((_, i) => `
      <button onclick="goToQuestion(${i})" 
              class="h-2 rounded-full transition-all cursor-pointer ${i === state.currentQuestionIndex ? 'w-5 bg-zinc-900 dark:bg-zinc-100 shadow-sm' : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400'}"
              title="Go to Question ${i + 1}"></button>
    `).join('');
  }

  // 2. Prompt & Reset Feedback
  elements.taskPrompt.innerText = q.taskPrompt;
  elements.taskFeedback.innerHTML = '';
  state.countedTaps = 0;
  if (elements.countedBadge) {
    elements.countedBadge.innerText = state.subject === 'Kannada' ? 'ಎಣಿಕೆ: ೦ (0)' : 'Counted: 0';
  }

  // 3. Render Clickable Tokens
  elements.taskContainer.innerHTML = q.taskItems.map((item, idx) => `
    <div onclick="handleTokenTap(this, ${idx + 1})" 
         data-counted="false"
         class="token-item relative px-5 py-3.5 surface-card rounded-xl text-2xl font-bold tracking-tight shadow-sm flex items-center justify-center min-w-[90px] cursor-pointer select-none transition transform hover:-translate-y-1 hover:border-zinc-400 active:scale-95" 
         title="Tap to count">
      <span class="token-val">${item}</span>
      <span class="tap-badge hidden absolute -top-2 -right-2 w-6 h-6 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold text-xs flex items-center justify-center shadow-md animate-scale"></span>
    </div>
  `).join('');

  // 4. Render Multiple Choice Options
  elements.taskOptions.innerHTML = q.options.map(opt => `
    <button onclick="handleAnswerChoice('${opt}')" class="btn-secondary py-3 px-4 rounded-xl text-base sm:text-lg font-bold tracking-tight transition transform hover:-translate-y-0.5 active:scale-98">
      ${opt}
    </button>
  `).join('');
}

window.handleTokenTap = function(el) {
  const badge = el.querySelector('.tap-badge');
  const isCounted = el.getAttribute('data-counted') === 'true';

  const knDigits = ['೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯', '೧೦'];
  const knWords = ['ಒಂದು', 'ಎರಡು', 'ಮೂರು', 'ನಾಲ್ಕು', 'ಐದು', 'ಆರು', 'ಏಳು', 'ಎಂಟು', 'ಒಂಬತ್ತು', 'ಹತ್ತು'];

  if (!isCounted) {
    state.countedTaps++;
    el.setAttribute('data-counted', 'true');
    
    if (state.subject === 'Kannada' && knDigits[state.countedTaps - 1]) {
      badge.innerText = knDigits[state.countedTaps - 1];
    } else {
      badge.innerText = state.countedTaps;
    }
    badge.classList.remove('hidden');
    el.classList.add('ring-2', 'ring-zinc-900', 'dark:ring-zinc-100');

    if (state.soundEffectsEnabled) {
      sounds.playTap(state.countedTaps);
    }

    if (state.subject === 'Kannada' && knWords[state.countedTaps - 1]) {
      speakText(knWords[state.countedTaps - 1]);
    } else {
      speakText(`${state.countedTaps}`);
    }
  } else {
    // Untap
    el.setAttribute('data-counted', 'false');
    badge.classList.add('hidden');
    el.classList.remove('ring-2', 'ring-zinc-900', 'dark:ring-zinc-100');
    state.countedTaps = Math.max(0, state.countedTaps - 1);
  }

  if (elements.countedBadge) {
    if (state.subject === 'Kannada' && knDigits[state.countedTaps - 1]) {
      elements.countedBadge.innerText = `ಎಣಿಕೆ: ${knDigits[state.countedTaps - 1]} (${state.countedTaps})`;
    } else {
      elements.countedBadge.innerText = `Counted: ${state.countedTaps}`;
    }
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

/**
 * Returns the clip steps for the CURRENT question:
 *   1. q.clipSteps  (per-question override)  — most specific
 *   2. If question 0, topicObj.clipSteps
 *   3. For Q2, Q3, etc.: auto-generate tailored multi-step clip for that specific question!
 */
function getActiveClipSteps(topicObj) {
  const q = getCurrentQuestion(topicObj);
  // 1. Explicit per-question clipSteps take absolute priority
  if (q && q.clipSteps && q.clipSteps.length > 0) return q.clipSteps;

  // 2. If this is question 0 (or only 1 question exists in topic), use topic-level clipSteps
  const totalQuestions = (topicObj.questions && topicObj.questions.length > 0) ? topicObj.questions.length : 1;
  if (state.currentQuestionIndex === 0 && topicObj.clipSteps && topicObj.clipSteps.length > 0) {
    return topicObj.clipSteps;
  }

  // 3. For any subsequent question without explicit clipSteps, auto-generate tailored steps
  if (q) {
    const itemsHtml = q.taskItems
      ? q.taskItems.map(i => `<span class="transform hover:scale-110 transition inline-block">${i}</span>`).join(' ')
      : '';
    const promptText = q.taskPrompt || topicObj.videoSubtitle;
    const answerText = q.correctAnswer;
    const successMsg = q.successMessage || `The correct answer is ${answerText}!`;

    return [
      {
        duration: 4,
        caption: `Question ${state.currentQuestionIndex + 1}: ${promptText}`,
        visualHtml: `<div class="text-4xl sm:text-5xl flex flex-wrap gap-4 justify-center items-center py-4 animate-pulse">${itemsHtml}</div>`
      },
      {
        duration: 4,
        caption: `Solution: ${successMsg}`,
        visualHtml: `<div class="surface-card px-8 py-5 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-3xl font-black text-center shadow-md"><span>${itemsHtml}</span><div class="mt-3 text-2xl font-bold">${answerText} ✅</div></div>`
      }
    ];
  }

  if (topicObj.clipSteps && topicObj.clipSteps.length > 0) return topicObj.clipSteps;
  return [];
}

function renderConceptClipInitial(topicObj) {
  elements.videoTitle.innerText = topicObj.videoTitle;

  // Show the current question prompt as the subtitle so the clip matches the active question
  const q = getCurrentQuestion(topicObj);
  elements.videoSubtitle.innerText = (q && q.taskPrompt) ? q.taskPrompt : topicObj.videoSubtitle;

  const clipSteps = getActiveClipSteps(topicObj);

  if (!state.clipPlaying) {
    const firstStep = clipSteps.length > 0 ? clipSteps[0] : null;
    if (firstStep) {
      elements.clipVisualStage.innerHTML = firstStep.visualHtml;
      elements.clipCaptionDisplay.innerText = firstStep.caption;
      elements.clipTimeDisplay.innerText = `Step 1 of ${clipSteps.length}`;
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
  const clipSteps = getActiveClipSteps(topicObj);
  if (!clipSteps || clipSteps.length === 0) return;

  state.clipPlaying = true;
  elements.clipPlayIcon.className = 'fa-solid fa-pause';

  if (state.clipStepIndex >= clipSteps.length) {
    state.clipStepIndex = 0;
  }

  playStepByIndex(state.clipStepIndex);
}

function playStepByIndex(index) {
  const topicObj = getCurrentTopic();
  const clipSteps = getActiveClipSteps(topicObj);
  if (!state.clipPlaying) return;

  if (index >= clipSteps.length) {
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
  const step = clipSteps[index];

  elements.clipVisualStage.innerHTML = step.visualHtml;
  elements.clipCaptionDisplay.innerText = step.caption;

  const pct = Math.round(((index + 1) / clipSteps.length) * 100);
  elements.clipProgressBar.style.width = `${pct}%`;
  elements.clipTimeDisplay.innerText = `Step ${index + 1} of ${clipSteps.length}`;

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
  speakText(text, onComplete);
}

function pauseConceptClip() {
  state.clipPlaying = false;
  elements.clipPlayIcon.className = 'fa-solid fa-play ml-0.5';
  clearTimeout(state.clipTimeout);
  stopAllSpeech();
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
  const topicObj = getCurrentTopic();
  const q = getCurrentQuestion(topicObj);
  
  const isMatch = String(chosen).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();

  if (isMatch) {
    if (state.soundEffectsEnabled) {
      sounds.playSuccess();
    }
    elements.taskFeedback.innerHTML = `
      <div class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl surface-card border-l-4 border-l-emerald-500 font-semibold text-base shadow-sm">
        <i class="fa-solid fa-check text-emerald-600"></i>
        <span>${q.successMessage}</span>
      </div>
    `;
    speakText(q.successMessage);

    // Auto-advance to next question after a short pause on correct answer
    const questions = topicObj.questions && topicObj.questions.length > 0 ? topicObj.questions : [topicObj];
    if (state.currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        state.currentQuestionIndex++;
        renderInteractiveTask(topicObj);
        resetConceptClip();
        elements.taskFeedback.innerHTML = '';
      }, 2200);
    }
  } else {
    if (state.soundEffectsEnabled) {
      sounds.playRetry();
    }

    const retryMsg = state.subject === 'Kannada'
      ? 'ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ! ಒಟ್ಟಿಗೆ ಎಣಿಸೋಣ.'
      : (state.currentVoiceOption?.id === 'hindi' ? 'एक बार और कोशिश करें!' : "Let's count together and try one more time!");

    elements.taskFeedback.innerHTML = `
      <div class="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl surface-card border-l-4 border-l-zinc-500 font-semibold text-base shadow-sm">
        <i class="fa-solid fa-arrow-rotate-right text-zinc-500"></i>
        <span>${retryMsg}</span>
      </div>
    `;
    speakText(retryMsg);
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
