# 🚀 FlashCard AI — Smart Learning with Spaced Repetition

An AI-powered flashcard system that converts PDFs into structured study decks and optimizes learning using **spaced repetition (SM-2 algorithm)**.

Built for the Cuemath AI Builder Challenge.

---

## 🌐 Live Demo

👉 https://cuemath-flash-card-ai.vercel.app/

---

## 🎥 Demo Video

👉https://www.loom.com/share/37b21728b98544249c7bee15112e4e03

---

## 🧠 Problem

Students often rely on passive learning (re-reading notes), which leads to poor retention.

This project solves that by combining:

* **Active Recall (flashcards)**
* **Spaced Repetition (SM-2 algorithm)**

---

## ✨ Features

### 📄 AI Flashcard Generation

* Upload any PDF
* Extracts content
* Generates high-quality flashcards using Gemini

---

### 🎮 Interactive Practice Mode

* Flip-based flashcards
* Keyboard shortcuts (1–4)
* Smooth transitions
* Game-like learning experience

---

### 🧠 Spaced Repetition System (SM-2)

* Cards adapt based on user performance
* Smart scheduling using:

  * repetitions
  * interval
  * ease factor
* Shows **next review timing**

---

### 📊 Dashboard

* Total decks & cards
* Due today system
* Progress tracking
* Study streak 🔥

---

### 🔥 Gamification

* Streak system (daily learning consistency)
* Smart nudges for due cards

---

### 🧠 AI Study Coach (WOW Feature)

* Suggests what to study
* Highlights weak areas
* Reduces decision fatigue

---

## 🏗️ Tech Stack

* **Frontend:** Next.js (App Router), Tailwind CSS, shadcn UI
* **Backend:** Next.js API Routes
* **Database:** Supabase
* **Auth:** Clerk
* **AI:** Google Gemini
* **Animations:** Framer Motion

---

## ⚙️ How It Works

1. Upload PDF
2. Extract text
3. Generate flashcards using AI
4. Save to database
5. Practice with spaced repetition
6. System schedules next review

---

## 🧠 Key Design Decisions

* Used **SM-2 algorithm** for effective long-term retention
* Focused on **UX + engagement** instead of just CRUD
* Added **streak & nudges** to increase consistency
* Designed **dashboard for clarity, not clutter**

---

## 🚧 Challenges

* Handling inconsistent AI JSON output
* Designing smooth practice flow
* Implementing spaced repetition correctly
* Balancing simplicity vs intelligence

---

## 🔮 Future Improvements

* AI-powered explanations for each card
* Difficulty auto-detection
* Mobile-first optimization
* Offline support

---

## 📸 Screenshots
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5e8a8def-91fa-4eea-8694-67e643fa5db3" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a3ba77c5-e547-4228-b362-7db7685bff69" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/244f804f-494b-4d3c-8631-0fda9d0a2b7e" />



---

## 📦 Setup

```bash
git clone https://github.com/your-repo
cd flashcard-ai
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
NEXT_PUBLIC_CLERK_KEY=...
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
GEMINI_API_KEY=...
```

---

## 🎯 What Makes This Project Stand Out

* Not just flashcard generation → **complete learning system**
* Implements **real cognitive science (SM-2)**
* Focus on **product thinking + UX**
* Includes **gamification + guidance layer**

---

## 🙌 Acknowledgment

Built as part of the **Cuemath AI Builder Challenge**.

---
