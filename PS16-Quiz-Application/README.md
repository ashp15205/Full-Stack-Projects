# Knowledge Quiz

Implemented an interactive Knowledge Quiz Application with a complete state flow (Start, Quiz, Result), weighted scoring, and a countdown timer system.

## Features
- **State-Driven Flow**: Transition seamlessly between the intro screen, active questions, and results dashboard.
- **Timed Challenges**: Each question is paired with a countdown timer to increase engagement.
- **Visual Feedback**: Progress bar and immediate color feedback for correct/incorrect answers.
- **Automated Scoring**: Calculations are performed upon completion based on user performance.
- **Minimalist UI**: Modern, high-contrast quiz box design.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS16-Quiz-Application/
├── index.html    # Structure for the different quiz screens
├── style.css     # Minimalist typography and state-based styles
└── script.js    # Quiz logic, question bank, and timer management
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. `script.js` contains a `questions` array.
2. The `startQuiz()` function resets state and begins the timer.
3. Upon selecting an answer, the logic stops the timer, highlights the choices, and increments the score if correct.
4. After a short delay, it transitions to the next question or the final result screen.

## Customization
- Add new questions to the array in `script.js`.
- Adjust the timer duration in the `timerValue` property.
- Change the color scheme in `style.css` by modifying the `.opt-btn.correct` and `.opt-btn.wrong` classes.
