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
    topics: [
      {
        id: 'math_addition',
        title: 'Visual Addition (Sums to 10)',
        description: 'Counting physical fruits and grouping quantities together.',
        taskPrompt: 'How many apples are in the basket?',
        taskItems: ['🍎', '🍎', '🍎', '🍎', '🍎'],
        options: [3, 5, 7],
        correctAnswer: 5,
        successMessage: 'Great job! Exactly 5 apples in the basket!',
        gameChallenge: {
          title: 'Class Fruit Counting Match',
          instruction: 'Which side has more fruits? Group A calls Left, Group B calls Right!',
          left: '🍎 🍎 🍎 (3)',
          right: '🍌 🍌 🍌 🍌 🍌 (5)'
        },
        videoTitle: 'Visual Addition with Real World Objects',
        videoSubtitle: 'Counting one-by-one with clear contrast'
      },
      {
        id: 'math_shapes',
        title: '2D Shapes Recognition',
        description: 'Identifying circles, squares, triangles in everyday objects.',
        taskPrompt: 'Which shape has 4 equal straight sides?',
        taskItems: ['🟦 Square', '🔴 Circle', '🔺 Triangle'],
        options: ['Square', 'Circle', 'Triangle'],
        correctAnswer: 'Square',
        successMessage: 'Correct! A square has 4 equal straight sides and 4 corners!',
        gameChallenge: {
          title: 'Class Shape Hunting Challenge',
          instruction: 'Spot the circle in the classroom! Team with first spot gets the point.',
          left: '🔴 Round Objects',
          right: '🟦 Box Objects'
        },
        videoTitle: 'Exploring Shapes Around Us',
        videoSubtitle: 'Identifying circles, squares and triangles in real life'
      },
      {
        id: 'math_patterns',
        title: 'Color & Pattern Sequences',
        description: 'Sequential logical reasoning using visual color blocks.',
        taskPrompt: 'What comes next in the pattern: Red ➔ Blue ➔ Red ➔ ?',
        taskItems: ['🔴', '🔵', '🔴', '❓'],
        options: ['🔵 Blue', '🔴 Red', '🟢 Green'],
        correctAnswer: '🔵 Blue',
        successMessage: 'Brilliant! The pattern repeats: Red then Blue!',
        gameChallenge: {
          title: 'Rhythm Pattern Clapping Game',
          instruction: 'Clap on Red, Stomp on Blue! Teacher leads the rhythm.',
          left: 'Clap (Red)',
          right: 'Stomp (Blue)'
        },
        videoTitle: 'Learning Visual Patterns Step-by-Step',
        videoSubtitle: 'Predicting colors and repeating shapes'
      }
    ]
  },
  {
    id: 'EVS',
    name: 'Environmental Studies (EVS)',
    icon: 'fa-leaf',
    topics: [
      {
        id: 'evs_plants',
        title: 'Parts of a Plant',
        description: 'Roots, stem, leaves, flower, and their primary functions.',
        taskPrompt: 'Which part of the plant grows under the soil and drinks water?',
        taskItems: ['🌱 Roots (Underground)', '🌿 Leaves (Green)', '🌸 Flower (Colorful)'],
        options: ['Roots', 'Leaves', 'Flower'],
        correctAnswer: 'Roots',
        successMessage: 'Spot on! The roots anchor the plant and drink water from the soil!',
        gameChallenge: {
          title: 'Plant Parts Relay Challenge',
          instruction: 'Call out the function: Team A names what drinks water, Team B names what catches sunlight!',
          left: 'Roots (Water)',
          right: 'Leaves (Sunlight)'
        },
        videoTitle: 'How Plants Grow: Roots to Flowers',
        videoSubtitle: 'A sensory visual journey through the garden'
      },
      {
        id: 'evs_animals',
        title: 'Domestic & Wild Animals',
        description: 'Categorizing animals by sounds, habitats, and food habits.',
        taskPrompt: 'Which animal is a domestic farm friend who gives milk?',
        taskItems: ['🐄 Cow (Farm)', '🦁 Lion (Jungle)', '🐘 Elephant (Forest)'],
        options: ['Cow', 'Lion', 'Elephant'],
        correctAnswer: 'Cow',
        successMessage: 'Correct! The cow lives peacefully on farms and provides milk!',
        gameChallenge: {
          title: 'Animal Sound Mimic Challenge',
          instruction: 'Team A makes farm sounds, Team B makes jungle sounds!',
          left: 'Farm Friends (Moo/Baa)',
          right: 'Jungle Kings (Roar/Trumpet)'
        },
        videoTitle: 'Animals and Their Homes',
        videoSubtitle: 'Exploring domestic friends and jungle wildlife'
      }
    ]
  },
  {
    id: 'English',
    name: 'English Language',
    icon: 'fa-spell-check',
    topics: [
      {
        id: 'eng_phonics',
        title: 'Phonic Word Sounds',
        description: 'Letter-sound matching with audio pronunciation.',
        taskPrompt: 'Which word starts with the sound /b/ as in Ball?',
        taskItems: ['⚽ Ball', '🐱 Cat', '🍎 Apple'],
        options: ['Ball', 'Cat', 'Apple'],
        correctAnswer: 'Ball',
        successMessage: 'Great listening! /b/ is for B-A-L-L!',
        gameChallenge: {
          title: 'Phonics Echo Challenge',
          instruction: 'Teacher says sound, whole class repeats in chorus!',
          left: '/b/ Sound',
          right: '/c/ Sound'
        },
        videoTitle: 'Phonics Fun: Exploring Letter Sounds',
        videoSubtitle: 'Sing-along phonetic pronunciation'
      },
      {
        id: 'eng_action_words',
        title: 'Action Words (Verbs)',
        description: 'Associating action verbs with physical movements.',
        taskPrompt: 'What action do your feet do when you leap into the air?',
        taskItems: ['🦘 Jump', '😴 Sleep', '📖 Read'],
        options: ['Jump', 'Sleep', 'Read'],
        correctAnswer: 'Jump',
        successMessage: 'Awesome! Jumping uses your feet to spring into the air!',
        gameChallenge: {
          title: 'Simon Says Classroom Movement Game',
          instruction: 'Simon says: Touch your toes! Simon says: Jump together!',
          left: 'Clap Hands',
          right: 'Stand Tall'
        },
        videoTitle: 'Action Words in Motion',
        videoSubtitle: 'Connecting verbs to joyful classroom activities'
      }
    ]
  }
];
