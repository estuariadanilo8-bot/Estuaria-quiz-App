import React from "react";

export default function QuestionCard({
  questionObj,
  selectedAnswer,
  onSelectAnswer,
}) {
  if (!questionObj) return null;

  return (
    <div className="question-card">
      <h3 className="question-text">
        {questionObj.question} <span className="required-asterisk">*</span>
      </h3>

      <div className="options-horizontal">
        {questionObj.options.map((option, index) => (
          <label key={index} className="radio-option">
            <input
              type="radio"
              name="quiz-option"
              checked={selectedAnswer === index}
              onChange={() => onSelectAnswer(index)}
            />
            <span className="radio-label-text">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}