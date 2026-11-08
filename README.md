# EduBridge — Inclusive Classroom Learning & Projection Platform

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-black?logo=vercel&style=for-the-badge)](https://edubridge-cp.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?logo=github&style=for-the-badge)](https://github.com/mohands0810-debug/EduBridge)
[![Accessibility](https://img.shields.io/badge/WCAG%202.2-Compliant-emerald?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License: MIT](https://img.shields.io/badge/License-MIT-zinc?style=for-the-badge)](LICENSE)

🔗 **Live Platform Demo:** [https://edubridge-cp.vercel.app](https://edubridge-cp.vercel.app)

---

## 📌 Project Overview
**EduBridge** is a modern, teacher-led classroom projection web application designed to empower inclusive primary education. It enables educators to dynamically adapt curriculum-aligned content for learners with diverse developmental and neurodivergent needs—including **ADHD, Autism Spectrum Disorder (ASD), Dyslexia, and Mild Intellectual Disabilities**.

Unlike conventional edtech applications that mandate individual student tablets, personal accounts, and screen isolation, EduBridge is operated by the teacher on a laptop and projected onto a classroom smart screen or projector. This architectural model eliminates device cost barriers, prevents digital distraction, and encourages whole-class collaborative participation.

---

## 🌟 Key Features

### 1. 5-Tier Adaptive Curriculum Filter
A streamlined hierarchical selector tailored for inclusive primary classrooms:
$$\text{Curriculum (CBSE / ICSE / State)} \longrightarrow \text{Support Profile} \longrightarrow \text{Grade (1–5)} \longrightarrow \text{Subject} \longrightarrow \text{Topic}$$

### 2. Condition-Specific Pedagogical Strategies
* **ADHD:** Micro-paced tasks, vibrant visual focal points, immediate feedback, and reduced visual clutter.
* **Autism Spectrum (ASD):** Predictable routines, calm monochrome surfaces, clear begin/end markers, and zero sudden sensory transitions.
* **Dyslexia:** OpenDyslexic high-readability typography, increased letter & line spacing, and synchronized audio-visual cues.
* **Intellectual Disabilities (ID):** Tangible real-world items (fruits, shapes, plants), single-concept prompts, and repetitive reinforcement.

### 3. Multimodal Classroom Learning Modes
* **Interactive Visual Tasks:** Hands-on polling challenges where teachers prompt the class to count, identify, and answer collectively.
* **Classroom Collaboration Challenges:** Group team games (e.g. Left Row vs. Right Row) with interactive scoring and praise audio.
* **Animated Concept Clips:** Step-by-step animated visual lessons with live closed captions and synchronized speech narration.

### 4. Accessibility & Inclusive Technology (WCAG 2.2)
* **Natural Speech Synthesis:** Integrated Web Speech API narration with custom voice selection and balanced classroom pacing.
* **One-Click Dyslexia Font:** Toggles specialized letter-spacing and weighted character baselines.
* **Minimalist Black & White System:** Clean Light and Dark modes engineered for maximum contrast and zero visual fatigue.
* **Classroom Projector Mode:** One-click full-screen stage that hides administrative setup controls for distraction-free classroom projection.

---

## 📊 The Problem & Educational Impact
Children with learning difficulties face severe barriers when taught with rigid, text-heavy mainstream materials:

* **50% Shortage:** Half of inclusive educational settings report a severe shortage of adaptive digital materials.
* **42% Learning Gap:** Neurodiverse students without multimodal aids are 42% less likely to achieve foundational literacy and numeracy benchmarks.
* **Infrastructure Feasibility:** Delivering adaptive learning through a single projector leverages existing classroom hardware without requiring expensive 1:1 student tablets.

---

## 🏗️ System Architecture & Data Flow
```
[ Teacher Workstation / Laptop ]
       │
       ▼ (Selects Curriculum, Support Profile, Grade, Subject, Topic)
[ EduBridge Adaptive Platform ]
       │
       ├──► Interactive Visual Tasks (Tactile class polling & counting)
       ├──► Collaborative Group Games (Team scorekeeper & challenges)
       └──► Animated Concept Clips (Synchronized visual steps & captions)
       │
       ▼
[ Classroom Projector / Smart Display ] ──► [ Inclusive Student Cohort ]
       ▲
       └────── Accessibility Layer (WCAG 2.2, Dyslexia Typography, Natural TTS)
```

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, Modern JavaScript (ES6+ Modules), Tailwind CSS
* **Design & Icons:** Minimalist Black & White Theme, FontAwesome Icons, Inter & Comic Neue Typography
* **Audio Engine:** Native Web Speech API (SpeechSynthesis)
* **Hosting & CI/CD:** Vercel (Automatic GitHub deployment on push)
* **Version Control:** Git & GitHub

---

## 🚀 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohands0810-debug/EduBridge.git
   cd EduBridge
   ```

2. **Run locally:**
   Because EduBridge uses native ES6 modules, open the folder using any local HTTP server:
   ```bash
   # Using Python:
   python -m http.server 3000
   
   # Or using VS Code:
   # Right click index.html -> 'Open with Live Server'
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

---

## 📄 License
Distributed under the MIT License. Feel free to use, adapt, and build upon this project.
