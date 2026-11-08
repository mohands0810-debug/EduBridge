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
  activeStageTab: 'interactive' // 'interactive', 'game', 'video'
};

// DOM Elements
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
  currentPathBreadcrumb: document.getElementById('currentPathBreadcrumb')
};

// Initialize the 5-step selectors
function initializeSelectors() {
  // 1. Populate Curricula
  elements.selCurriculum.innerHTML = CURRICULA.map(c => 
    `<option value="${c.id}" ${c.id === state.curriculum ? 'selected' : ''}>${c.name}</option>`
  ).join('');

  // 2. Populate Disability Profiles
  elements.selDisability.innerHTML = DISABILITY_PROFILES.map(d => 
    `<option value="${d.id}" ${d.id === state.disability ? 'selected' : ''}>${d.name}</option>`
  ).join('');

  // 3. Populate Grades
  elements.selGrade.innerHTML = GRADES.map(g => 
    `<option value="${g.id}" ${g.id === state.grade ? 'selected' : ''}>${g.name} (${g.ageRange})</option>`
  ).join('');

  // 4. Populate Subjects
  elements.selSubject.innerHTML = SUBJECTS.map(s => 
    `<option value="${s.id}" ${s.id === state.subject ? 'selected' : ''}>${s.name}</option>`
  ).join('');

  // 5. Populate Topics based on current subject
  updateTopicOptions();

  // Attach Event Listeners
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
    updateTopicOptions();
    updateUI();
  });

  elements.selTopic.addEventListener('change', (e) => {
    state.topic = e.target.value;
    updateUI();
  });

  // Toolbar Listeners
  elements.btnDyslexia.addEventListener('click', toggleDyslexia);
  elements.btnContrast.addEventListener('click', toggleContrast);
  elements.btnProjector.addEventListener('click', toggleProjector);
  elements.btnTts.addEventListener('click', speakCurrentTopic);

  // Tab Listeners
  document.querySelectorAll('.stage-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTab = e.currentTarget.dataset.tab;
      setStageTab(targetTab);
    });
  });

  updateUI();
}

function updateTopicOptions() {
  const currentSubjectObj = SUBJECTS.find(s => s.id === state.subject) || SUBJECTS[0];
  elements.selTopic.innerHTML = currentSubjectObj.topics.map(t => 
    `<option value="${t.id}" ${t.id === state.topic ? 'selected' : ''}>${t.title}</option>`
  ).join('');

  if (!currentSubjectObj.topics.some(t => t.id === state.topic)) {
    state.topic = currentSubjectObj.topics[0].id;
  }
}

function updateUI() {
  const currObj = CURRICULA.find(c => c.id === state.curriculum);
  const disObj = DISABILITY_PROFILES.find(d => d.id === state.disability);
  const subjObj = SUBJECTS.find(s => s.id === state.subject);
  const topicObj = subjObj.topics.find(t => t.id === state.topic) || subjObj.topics[0];

  // Update Breadcrumb
  elements.currentPathBreadcrumb.innerHTML = `
    <span class="font-bold text-indigo-700">${currObj.name}</span> 
    <i class="fa-solid fa-chevron-right text-xs text-slate-400"></i>
    <span class="font-bold text-amber-600">${disObj.name}</span> 
    <i class="fa-solid fa-chevron-right text-xs text-slate-400"></i>
    <span>Grade ${state.grade}</span> 
    <i class="fa-solid fa-chevron-right text-xs text-slate-400"></i>
    <span class="font-semibold text-slate-700">${subjObj.name}</span>
    <i class="fa-solid fa-chevron-right text-xs text-slate-400"></i>
    <span class="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md font-bold">${topicObj.title}</span>
  `;

  // Update Pedagogical Strategy Badge
  elements.adaptationTitle.innerHTML = `<i class="fa-solid ${disObj.icon} mr-1.5" style="color: ${disObj.accentColor}"></i> Strategy for ${disObj.name}:`;
  elements.adaptationText.innerText = disObj.strategy;

  // Render Stage Content
  renderStage(topicObj, disObj);
}

function renderStage(topicObj, disObj) {
  const stageHeader = document.getElementById('stageHeaderTitle');
  const stageHeaderSub = document.getElementById('stageHeaderSub');
  
  stageHeader.innerText = topicObj.title;
  stageHeaderSub.innerText = `${topicObj.description} • Calibrated for ${disObj.name}`;
}

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
    elements.btnProjector.querySelector('span').innerText = 'Exit Projector';
  } else {
    icon.className = 'fa-solid fa-expand';
    elements.btnProjector.querySelector('span').innerText = 'Projector Mode';
  }
}

function speakCurrentTopic() {
  if (!('speechSynthesis' in window)) {
    alert('Web Speech API is not supported in this browser.');
    return;
  }
  window.speechSynthesis.cancel();
  
  const subjObj = SUBJECTS.find(s => s.id === state.subject);
  const topicObj = subjObj.topics.find(t => t.id === state.topic);
  const disObj = DISABILITY_PROFILES.find(d => d.id === state.disability);

  const textToSpeak = `Today's lesson is ${topicObj.title}. ${topicObj.description}. Let us learn together!`;
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  
  // Slower rate for cognitive comprehension
  utterance.rate = state.disability === 'ID' || state.disability === 'ASD' ? 0.8 : 0.9;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
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

// Global hook for demo interactivity
window.checkAnswer = function(selectedVal) {
  const fb = document.getElementById('taskFeedback');
  if (selectedVal === 5) {
    fb.innerHTML = `<span class="text-green-600 bg-green-50 px-4 py-2 rounded-xl border border-green-200 inline-flex items-center gap-2"><i class="fa-solid fa-circle-check text-xl"></i> Correct! Exactly 5 apples in the basket!</span>`;
    speakFeedback("Correct! Exactly 5 apples in the basket!");
  } else {
    fb.innerHTML = `<span class="text-amber-600 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200 inline-flex items-center gap-2"><i class="fa-solid fa-arrows-rotate text-xl"></i> Nice try! Let us count them together one by one!</span>`;
    speakFeedback("Nice try! Let us count them together one by one!");
  }
};

let groupPoints = { a: 0, b: 0 };
window.addTeamPoint = function(team) {
  if (team === 'A') groupPoints.a++;
  if (team === 'B') groupPoints.b++;
  
  document.getElementById('scoreTeamA').innerText = groupPoints.a;
  document.getElementById('scoreTeamB').innerText = groupPoints.b;
  speakFeedback(`Point for Team ${team}!`);
};

function speakFeedback(text) {
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }
}

// Start application
document.addEventListener('DOMContentLoaded', initializeSelectors);
