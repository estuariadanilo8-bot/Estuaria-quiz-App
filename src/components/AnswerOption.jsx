import React from "react";

export default function AnswerOption({ optionText, isSelected, onSelect }) {
  return (
    <div
      className={`answer-option ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <span className="radio-circle"></span>
      <span className="option-text">{optionText}</span>
    </div>
  );
}