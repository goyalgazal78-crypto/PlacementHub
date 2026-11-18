# PlacementHub - Technical Placement Platform & AI Mock Interviewer

PlacementHub is a frontend-only placement preparation platform featuring an interactive DSA Sheet, Progress Tracker, Downloadable Notes, and an **AI Mock Technical Interviewer**.

---

## 🚀 How to Run the Project (Port 8000)

Since PlacementHub is a client-side web application (HTML/CSS/JS), you can run it locally with any static web server:

### Option 1: Using Python (Recommended)
```bash
python -m http.server 8000
```
Open **[http://localhost:8000](http://localhost:8000)** or directly open **[http://localhost:8000/mock-interview.html](http://localhost:8000/mock-interview.html)** in your browser.

### Option 2: Using Node.js / npx
```bash
npx serve -l 8000 .
```

---

## 🔑 How to Add Your API Key

The AI Mock Interviewer is 100% frontend and connects directly from your browser to your chosen AI provider with `fetch()`. No backend server is required.

### Method A: In-Browser Settings (Simplest & Safest)
1. Open the Mock Interview page at `http://localhost:8000/mock-interview.html`.
2. Click **API Key Settings** in the top-right header.
3. Select your provider (**Google Gemini**, **OpenAI**, **Groq Cloud**, or **OpenRouter**).
4. Paste your API key and click **Save Settings**.
5. Your key is saved locally in `localStorage` and will never be committed to git.

### Method B: Using `config.js`
1. Copy the example config file:
   ```bash
   cp config.example.js config.js
   ```
2. Open `config.js` and insert your API key:
   ```javascript
   window.AI_CONFIG = {
     provider: 'gemini', // 'gemini' | 'openai' | 'groq' | 'openrouter'
     apiKey: 'YOUR_ACTUAL_API_KEY_HERE',
     model: 'gemini-1.5-flash',
     apiEndpoint: ''
   };
   ```
3. `config.js` is automatically excluded by `.gitignore` so your key is never committed.

---

## 🎯 AI Mock Interview Features

- **Single Source of Truth**: Evaluates only the 110 problems from the PlacementHub DSA Sheet.
- **5-Stage Structured Interview**:
  1. **Understanding**: Problem restatement and clarifying constraints/edge cases.
  2. **Approach**: Algorithmic strategy & brute-force explanation.
  3. **Optimization**: Space/time complexity analysis and optimization queries.
  4. **Code**: Live coding editor with syntax support (C++, Java, Python, JavaScript) and instant review.
  5. **Wrap-up**: Summary and debrief.
- **Strict Scope**: Guards ensure the AI remains focused solely on technical interview topics and refuses prompt jailbreaks or irrelevant queries.
- **Timer & Hint System**: Countdown timer matching the problem's allotted time and a 2-attempt progressive hint policy.
- **Detailed Evaluation Report Card**: Overall score /10, 5-category breakdown, strengths, areas to improve, and recommended follow-up problems from the DSA Sheet.
- **Progress Tracker Integration**: Average interview score and past session history sync directly to the Progress Tracker page (`progress.html`).

