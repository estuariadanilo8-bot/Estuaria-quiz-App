import React from "react";

export default function QuizHeader({ current, total }) {
  return (
    <header className="quiz-header">
      <h2>Frontend Quiz</h2>
      <span className="badge">
        {current} / {total}
      </span>
    </header>
  );
}