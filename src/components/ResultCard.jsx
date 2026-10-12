import React from "react";

export default function ResultCard({ score, total, onRetake }) {
  return (
    <div className="result-card-content">
      <p className="quiz-completed-sub">Quiz Completed</p>
      <h1 className="your-score-title">Your score:</h1>

      <div className="score-display-box">
        <span className="score-fraction">
          {score} / {total}
        </span>
      </div>

      <button className="start-quiz-purple-btn" onClick={onRetake}>
        Start Quiz
      </button>
    </div>
  );
}