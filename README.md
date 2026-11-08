# Computer-Based Learning Tool for Mentally Challenged Students

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-black?logo=vercel&style=for-the-badge)](https://edubridge-cp.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?logo=github&style=for-the-badge)](https://github.com/mohands0810-debug/EduBridge)

🔗 **Live Platform Demo:** [https://edubridge-cp.vercel.app](https://edubridge-cp.vercel.app)

**Department of Computer Science & Engineering**  
**K.S. Institute of Technology (KSIT), Bengaluru**  
**Course:** Community Project (`25BCP308`) — 3rd Semester  
**Batch No.:** 02 | **Review:** 0  

---

## 📌 Project Overview
**EduBridge** is a teacher-led, classroom-projection learning web application designed for inclusive primary school classrooms (Grades 1–5, foundational learning). It provides curriculum-aligned (CBSE / State Board) digital content adapted for children with neurodevelopmental and learning support needs (ADHD, Autism Spectrum Disorder, Dyslexia, and Mild Intellectual Disabilities).

Unlike typical e-learning tools that require individual student tablets and personal logins, this application is operated by the teacher on a laptop and projected onto a classroom smart-board or projector. This eliminates hardware barriers, avoids student digital isolation, and encourages whole-class collaborative learning.

---

## 👥 Team & Roles
| USN | Student Name | Assigned Role |
| :--- | :--- | :--- |
| **1KS25CS102** | **Ravi Vishnu Vardhan** | Testing & Documentation Lead |
| **1KS25CS111** | **Sanjay Srinivas M** | Survey Lead & Frontend Developer |

* **Institution:** K.S. Institute of Technology, Raghuvanahalli, Kanakapura Road, Bengaluru - 560 109
* **Affiliation:** Autonomous Institution under VTU, Belagavi & Approved by AICTE, New Delhi (Accredited by NBA & NAAC A+)

---

## 🎯 Objectives
1. **Teacher-Led Curriculum Flow:** Implement a 5-step hierarchical navigation flow (`Curriculum` → `Support Need / Disorder` → `Grade` → `Subject` → `Topic`).
2. **Accessible Multimodal Content:** Deliver bite-sized animated videos, high-contrast visual cards, and text-to-speech explanations calibrated for special-needs learners.
3. **Collaborative Classroom Activities:** Integrate projection-friendly interactive lessons and group games (e.g., shape matching, visual arithmetic) for whole-class engagement.
4. **Universal Accessibility Standards:** Integrate WCAG 2.2 compliant features including dyslexia-friendly typography, adjustable visual contrast, simplified layouts, and paced speech playback.

---

## 📊 Problem Statement & Statistical Evidence
Children with developmental disabilities and learning difficulties face significant barriers in traditional classrooms due to rigid, text-heavy teaching materials and a lack of adaptive digital aids.

* **Evidence 1 (50%):** Half of all specialized learning environments report a shortage of structured, accessible digital learning materials.
* **Evidence 2 (40%):** Over 40% of developing educational systems lack formal teacher training in assistive classroom technology.
* **Evidence 3 (42%):** Children with unaddressed learning disabilities are 42% less likely to develop foundational literacy and numeracy skills.

---

## 🔍 Existing Solutions & Gap Analysis
| Existing Solution | Current Capabilities | Identified Gap Addressed by EduBridge |
| :--- | :--- | :--- |
| **DIKSHA (Govt. of India)** | Curriculum-linked textbooks and standard quizzes. | Lacks disorder-specific adaptations, sensory pacing, and teacher-led game flows. |
| **ePathshala (NCERT)** | Digital textbooks, PDFs, and standard audio recordings. | Purely passive reading materials; lacks interactive classroom participation exercises. |
| **YouTube Education** | Video demonstrations for general subjects. | Videos are uncalibrated, distractible, and lack pedagogical structure for special education. |

**Our Unique Gap:** A centralized, distraction-free classroom projection tool combining curriculum-aligned videos, interactive lessons, and group games with one-click accessibility adaptations.

---

## 🏗️ System Architecture & Flow
```
[ Teacher / Laptop ]
       │
       ▼ (Selects Curriculum, Disorder, Grade, Subject, Topic)
[ EduBridge Web Platform ]
       │
       ├──► Videos (Visual + Audio Narration + Subtitles)
       ├──► Interactive Lessons (Drag & Drop, Step-by-Step Counting)
       └──► Educational Games (Whole-Class Group Challenges & Puzzles)
       │
       ▼
[ Classroom Projector / Screen ] ──► [ Inclusive Student Cohort ]
       ▲
       └────── Accessibility Layer (WCAG 2.2, Dyslexia Font, Contrast, TTS)
```

---

## 🛠️ Tools & Technologies (Planned)
* **Frontend:** HTML5, CSS3 / Tailwind CSS, JavaScript (ES6+) / React.js
* **Accessibility / Audio:** Web Speech API (Text-To-Speech), OpenDyslexic Font
* **Version Control:** Git & GitHub
* **Deployment Target:** GitHub Pages / Vercel
* **Classroom Hardware:** Laptop connected via HDMI/VGA to Classroom Projector

---

## 📁 Repository Structure
```
├── docs/
│   ├── REVIEW_0_DOCUMENTATION.md   # Complete Review 0 documentation & slide notes
│   └── architecture_diagram.png    # System flow block diagram
├── src/                            # Website source code (To be built)
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
├── .gitignore                      # Git ignore rules
└── README.md                       # Main project documentation
```

---

## 🌐 Sustainable Development Goals (SDGs) & Outcomes
* **SDG 4 (Quality Education):** Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
* **SDG 10 (Reduced Inequalities):** Empower and promote the social and educational inclusion of children with disabilities.
* **PO Mapping:** PO6 (The Engineer and Society), PO8 (Ethics), PO9 (Individual & Team Work).

---

## 📄 License
This project is developed for academic evaluation under the Community Project curriculum at KSIT Bengaluru.
