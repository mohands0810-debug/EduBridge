/**
 * EduBridge Curriculum & Adaptation Knowledge Base
 * Aligned with NCERT/CBSE inclusive primary school standards
 */

export const CURRICULA = [
  { id: 'CBSE', name: 'CBSE (NCERT)', subtitle: 'National Curriculum Framework' },
  { id: 'ICSE', name: 'ICSE / CISCE', subtitle: 'Council for Indian School Certificate' },
  { id: 'State_Board', name: 'Karnataka State Board', subtitle: 'DSERT Curricular Guidelines' }
];

export const DISABILITY_PROFILES = [
  {
    id: 'ADHD',
    name: 'Attention Deficit (ADHD)',
    icon: 'fa-bolt',
    accentColor: '#f59e0b',
    strategy: 'Short 2-3 minute micro-tasks, high-contrast visual tokens, immediate reward feedback, and minimized background text to retain attention.'
  },
  {
    id: 'ASD',
    name: 'Autism Spectrum (ASD)',
    icon: 'fa-puzzle-piece',
    accentColor: '#6366f1',
    strategy: 'Predictable step routines, calm pastel palettes, zero sudden audio cues, literal visual representations, and clear beginning/end indicators.'
  },
  {
    id: 'Dyslexia',
    name: 'Specific Learning Disability (Dyslexia)',
    icon: 'fa-book-open-reader',
    accentColor: '#10b981',
    strategy: 'Enforced letter spacing, dual audio-visual text highlighting, colored background overlay, and phonetic word segmentation.'
  },
  {
    id: 'ID',
    name: 'Intellectual Disability (Mild/Moderate)',
    icon: 'fa-shapes',
    accentColor: '#ec4899',
    strategy: 'Concrete physical objects (apples, blocks, coins), repetitive reinforcement, single-step prompts, and real-life functional examples.'
  },
  {
    id: 'General',
    name: 'Inclusive Mixed Classroom',
    icon: 'fa-users',
    accentColor: '#0ea5e9',
    strategy: 'Universal Design for Learning (UDL) balancing auditory narration, tactile on-screen manipulation, and collaborative peer learning.'
  }
];

export const GRADES = [
  { id: 1, name: 'Grade 1', ageRange: 'Ages 6–7', stage: 'Foundational' },
  { id: 2, name: 'Grade 2', ageRange: 'Ages 7–8', stage: 'Foundational' },
  { id: 3, name: 'Grade 3', ageRange: 'Ages 8–9', stage: 'Preparatory' },
  { id: 4, name: 'Grade 4', ageRange: 'Ages 9–10', stage: 'Preparatory' },
  { id: 5, name: 'Grade 5', ageRange: 'Ages 10–11', stage: 'Preparatory' }
];

export const SUBJECTS = [
  {
    id: 'Math',
    name: 'Mathematics',
    icon: 'fa-calculator',
    color: 'text-amber-500',
    topics: [
      {
        id: 'math_addition',
        title: 'Visual Addition (Sums to 10)',
        description: 'Counting physical fruits and grouping quantities together.'
      },
      {
        id: 'math_shapes',
        title: '2D Shapes Recognition',
        description: 'Identifying circles, squares, triangles in everyday objects.'
      },
      {
        id: 'math_patterns',
        title: 'Repeating Color Patterns',
        description: 'Sequential reasoning using visual blocks.'
      }
    ]
  },
  {
    id: 'EVS',
    name: 'Environmental Studies (EVS)',
    icon: 'fa-leaf',
    color: 'text-emerald-500',
    topics: [
      {
        id: 'evs_plants',
        title: 'Parts of a Plant',
        description: 'Roots, stem, leaves, flower, and their primary functions.'
      },
      {
        id: 'evs_animals',
        title: 'Domestic & Wild Animals',
        description: 'Categorizing animals by sounds, habitats, and food habits.'
      }
    ]
  },
  {
    id: 'English',
    name: 'English Language',
    icon: 'fa-spell-check',
    color: 'text-blue-500',
    topics: [
      {
        id: 'eng_phonics',
        title: 'Phonic Word Sounds',
        description: 'Letter-sound matching with audio pronunciation.'
      },
      {
        id: 'eng_action_words',
        title: 'Action Words (Verbs)',
        description: 'Associating verbs with animated everyday movements.'
      }
    ]
  }
];
