# EduBridge — System Specification & Architectural Design

## 1. Domain Overview
In inclusive classrooms worldwide, students with diverse cognitive and developmental profiles (such as ADHD, Autism Spectrum Disorder, Dyslexia, and Mild Intellectual Disabilities) learn alongside neurotypical peers. 

Standard electronic learning software frequently relies on 1:1 hardware deployments (requiring every student to operate an individual tablet). In real-world educational institutions, this approach encounters severe obstacles:
* **High capital expense:** Procuring, maintaining, and charging devices for every child is economically unsustainable for many schools.
* **Cognitive fragmentation:** Individual screens often isolate special-needs learners and increase off-task distraction.
* **Loss of peer dynamics:** Learning in early childhood is inherently social; shared activities produce superior communicative and behavioral outcomes.

**EduBridge solves this through a Teacher-Led Classroom Projection Architecture.**

---

## 2. Core Functional Requirements

### 2.1 The 5-Tier Adaptive Navigation Pipeline
1. **Curriculum Mapping:** Support national and state-level standards (CBSE, ICSE, State Boards).
2. **Condition-Specific Profile:** Dynamically calibrates pacing, contrast, and layout complexity.
3. **Grade Level:** Primary school grades 1 through 5 (ages 6–11).
4. **Subject Areas:** Mathematics, Environmental Studies (EVS), and English Language.
5. **Topic Modules:** Concrete conceptual lessons aligned with foundational literacy and numeracy.

### 2.2 Multimodal Presentation Engine
* **Interactive Class Polling:** High-contrast visual tokens and prompt questions designed for whole-group verbal answers.
* **Collaborative Team Challenges:** Classroom game mechanics (Row A vs. Row B) that incentivize peer support and verbal cooperation.
* **Step-by-Step Concept Clips:** Visual concept animations that progress in lockstep with synchronized speech narration and closed captions.

---

## 3. Accessibility & WCAG 2.2 Standards
* **Typography:** Integrates dyslexia-friendly font geometry with wide kerning and distinctive character baselines.
* **High-Contrast Palette:** Pure black and white minimalist visual system eliminating decorative clutter and sensory overload.
* **Audio-Assisted Learning:** Native speech synthesis engine with rate and pitch calibrations for developmental comprehension.
* **Projector Mode:** One-click distraction-free full-screen stage hiding configuration controls from students.

---

## 4. Software Architecture
```
┌────────────────────────────────────────────────────────┐
│               Teacher Control Layer                    │
│   (Curriculum / Support Need / Subject / Topic Setup)  │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│              EduBridge Core State Engine               │
│        (Curriculum Data Model & Adaptation Logic)       │
└───────┬───────────────────┼────────────────────┬───────┘
        │                   │                    │
        ▼                   ▼                    ▼
┌──────────────┐    ┌───────────────┐    ┌───────────────┐
│ Interactive  │    │ Collaborative │    │ Concept Clip  │
│  Tasks Pane  │    │  Games Pane   │    │  Player Pane  │
└───────┬──────┘    └───────┬───────┘    └───────┬───────┘
        │                   │                    │
        └───────────────────┼────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│           Classroom Projection Stage Canvas            │
│         (Projected to Smart Screen / Display)          │
└────────────────────────────────────────────────────────┘
```
