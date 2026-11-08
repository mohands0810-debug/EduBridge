import { CURRICULA, DISABILITY_PROFILES, GRADES, SUBJECTS } from '../data/curriculumData.js';

// Application State
const state = {
  curriculum: 'CBSE',
  disability: 'ADHD',
  grade: 2,
  subject: 'Math',
  topic: 'math_addition',
  isDyslexic: false,
  isHighContrast: false,
  isProjectorMode: false,
  activeStageTab: 'interactive',
  scores: { teamA: 0, teamB: 0 }
};

// DOM References
const elements = {
  selCurriculum: document.getElementById('selCurriculum'),
  selDisability: document.getElementById('selDisability'),
  selGrade: document.getElementById('selGrade'),
  selSubject: document.getElementById('selSubject'),
  selTopic: document.getElementById('selTopic'),
  adaptationBadge: document.getElementById('adaptationBadge'),
  adaptationTitle: document.getElementById('adaptationTitle'),
  adaptationText: document.getElementById('adaptationText'),
  projectorStage: document.getElementById('projectorStage'),
  btnDyslexia: document.getElementById('btnDyslexia'),
  btnContrast: document.getElementById('btnContrast'),
  btnProjector: document.getElementById('btnProjector'),
  btnTts: document.getElementById('btnTts'),
  currentPathBreadcrumb: document.getElementById('currentPathBreadcrumb'),
  
  // Interactive Task Elements
  taskPrompt: document.getElementById('taskPrompt'),
  taskContainer: document.getElementById('taskContainer'),
  taskOptions: document.getElementById('taskOptions'),
  taskFeedback: document.getElementById('taskFeedback'),

  // Game Elements
  gameTitle: document.getElementById('gameTitle'),
  gameInstruction: document.getElementById('gameInstruction'),
  gameCardLeft: document.getElementById('gameCardLeft'),
  gameCardRight: document.getElementById('gameCardRight'),
  scoreTeamA: document.getElementById('scoreTeamA'),
  scoreTeamB: document.getElementById('scoreTeamB'),

  // Video Elements
  videoTitle: document.getElementById('videoTitle'),
  videoSubtitle: document.getElementById('videoSubtitle')
};

// Initialize Application
function initialize() {
  populateDropdowns();
  setupEventListeners();
  updateUI();
}

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
    updateUI();
  });

  // Toolbar Actions
  elements.btnDyslexia.addEventListener('click', toggleDyslexia);
  elements.btnContrast.addEventListener('click', toggleContrast);
  elements.btnProjector.addEventListener('click', toggleProjector);
  elements.btnTts.addEventListener('click', speakCurrentScreen);

  // Tabs
  document.querySelectorAll('.stage-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      setStageTab(e.currentTarget.dataset.tab);
    });
  });
}

function updateUI() {
  const currObj = CURRICULA.find(c => c.id === state.curriculum);
  const disObj = DISABILITY_PROFILES.find(d => d.id === state.disability);
  const subjObj = SUBJECTS.find(s => s.id === state.subject);
  const topicObj = subjObj.topics.find(t => t.id === state.topic) || subjObj.topics[0];

  // 1. Update Breadcrumb
  elements.currentPathBreadcrumb.innerHTML = `
    <span class="font-bold text-indigo-700">${currObj.name}</span> 
    <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
    <span class="font-bold text-amber-600">${disObj.name}</span> 
    <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
    <span>Grade ${state.grade}</span> 
    <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
    <span class="font-semibold text-slate-700">${subjObj.name}</span>
    <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
    <span class="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md font-bold">${topicObj.title}</span>
  `;

  // 2. Update Adaptation Strategy Banner
  elements.adaptationTitle.innerHTML = `<i class="fa-solid ${disObj.icon} mr-1.5" style="color: ${disObj.accentColor}"></i> Strategy for ${disObj.name}:`;
  elements.adaptationText.innerText = disObj.strategy;

  // 3. Update Stage Titles
  document.getElementById('stageHeaderTitle').innerText = topicObj.title;
  document.getElementById('stageHeaderSub').innerText = `${topicObj.description} • Calibrated for ${disObj.name}`;

  // 4. Render Active Interactive Task
  renderInteractiveTask(topicObj);

  // 5. Render Group Game
  renderGroupGame(topicObj);

  // 6. Render Video Tab
  renderVideoTab(topicObj);
}

function renderInteractiveTask(topicObj) {
  elements.taskPrompt.innerText = topicObj.taskPrompt;
  elements.taskFeedback.innerHTML = '';

  // Render Visual Items
  elements.taskContainer.innerHTML = topicObj.taskItems.map((item, idx) => `
    <div class="px-5 py-3 bg-white border-2 border-indigo-200 text-indigo-900 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-sm animate-bounce" style="animation-delay: ${idx * 0.1}s">
      ${item}
    </div>
  `).join('');

  // Render Polling Options
  elements.taskOptions.innerHTML = topicObj.options.map(opt => `
    <button onclick="handleAnswerChoice('${opt}')" class="py-4 px-6 bg-white hover:bg-indigo-50 border-2 border-indigo-200 rounded-2xl text-xl font-black text-indigo-700 shadow-sm transition transform hover:-translate-y-1 active:scale-95">
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

function renderVideoTab(topicObj) {
  elements.videoTitle.innerText = topicObj.videoTitle;
  elements.videoSubtitle.innerText = topicObj.videoSubtitle;
}

// Global Answer Checker
window.handleAnswerChoice = function(chosen) {
  const subjObj = SUBJECTS.find(s => s.id === state.subject);
  const topicObj = subjObj.topics.find(t => t.id === state.topic);
  
  const isMatch = String(chosen).toLowerCase().includes(String(topicObj.correctAnswer).toLowerCase());

  if (isMatch) {
    elements.taskFeedback.innerHTML = `
      <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-green-100 text-green-800 border-2 border-green-300 font-extrabold text-lg shadow-sm">
        <i class="fa-solid fa-circle-check text-2xl text-green-600"></i>
        <span>${topicObj.successMessage}</span>
      </div>
    `;
    speakPaced(topicObj.successMessage);
  } else {
    elements.taskFeedback.innerHTML = `
      <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-100 text-amber-900 border-2 border-amber-300 font-extrabold text-lg shadow-sm">
        <i class="fa-solid fa-rotate text-xl text-amber-600"></i>
        <span>Let us look closely and try once more together!</span>
      </div>
    `;
    speakPaced("Let us look closely and try once more together!");
  }
};

// Global Team Points
window.awardTeamPoint = function(team) {
  if (team === 'A') state.scores.teamA++;
  if (team === 'B') state.scores.teamB++;

  elements.scoreTeamA.innerText = state.scores.teamA;
  elements.scoreTeamB.innerText = state.scores.teamB;
  speakPaced(`Point awarded to Team ${team}! Outstanding teamwork!`);
};

// Accessibility Toggles
function toggleDyslexia() {
  state.isDyslexic = !state.isDyslexic;
  document.body.classList.toggle('font-dyslexic', state.isDyslexic);
  elements.btnDyslexia.classList.toggle('bg-amber-400', state.isDyslexic);
  elements.btnDyslexia.classList.toggle('text-indigo-950', state.isDyslexic);
}

function toggleContrast() {
  state.isHighContrast = !state.isHighContrast;
  document.body.classList.toggle('high-contrast', state.isHighContrast);
  elements.btnContrast.classList.toggle('bg-amber-400', state.isHighContrast);
  elements.btnContrast.classList.toggle('text-indigo-950', state.isHighContrast);
}

function toggleProjector() {
  state.isProjectorMode = !state.isProjectorMode;
  document.body.classList.toggle('projector-fullscreen', state.isProjectorMode);
  elements.btnProjector.classList.toggle('bg-amber-400', state.isProjectorMode);
  elements.btnProjector.classList.toggle('text-slate-900', state.isProjectorMode);

  const icon = elements.btnProjector.querySelector('i');
  if (state.isProjectorMode) {
    icon.className = 'fa-solid fa-compress';
    elements.btnProjector.querySelector('span').innerText = 'Exit Fullscreen';
  } else {
    icon.className = 'fa-solid fa-expand';
    elements.btnProjector.querySelector('span').innerText = 'Projector Mode';
  }
}

function speakCurrentScreen() {
  const subjObj = SUBJECTS.find(s => s.id === state.subject);
  const topicObj = subjObj.topics.find(t => t.id === state.topic);
  speakPaced(`Class prompt: ${topicObj.taskPrompt}`);
}

function speakPaced(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  
  const u = new SpeechSynthesisUtterance(text);
  u.rate = state.disability === 'ID' || state.disability === 'ASD' ? 0.8 : 0.88;
  u.pitch = 1.05;
  window.speechSynthesis.speak(u);
}

function setStageTab(tab) {
  state.activeStageTab = tab;

  document.querySelectorAll('.stage-tab-btn').forEach(btn => {
    const isTarget = btn.dataset.tab === tab;
    btn.className = isTarget 
      ? 'stage-tab-btn px-5 py-2.5 rounded-xl font-bold text-sm bg-indigo-600 text-white shadow-sm flex items-center space-x-2 transition'
      : 'stage-tab-btn px-5 py-2.5 rounded-xl font-bold text-sm bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center space-x-2 transition';
  });

  document.getElementById('paneInteractive').classList.toggle('hidden', tab !== 'interactive');
  document.getElementById('paneGame').classList.toggle('hidden', tab !== 'game');
  document.getElementById('paneVideo').classList.toggle('hidden', tab !== 'video');
}

// Run on load
document.addEventListener('DOMContentLoaded', initialize);
