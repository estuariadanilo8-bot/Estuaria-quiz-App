import React, { useState } from "react";
import { questions } from "./question";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";
import "./App.css";

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsCompleted(false);
  };

  const handleSelectAnswer = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  if (!quizStarted) {
    return (
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-subtitle">Welcome to the</h1>
          <h2 className="home-title">Frontend Quiz!</h2>
          <button className="start-quiz-purple-btn" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="result-dark-container">
        <ResultCard
          score={calculateScore()}
          total={questions.length}
          onRetake={handleStartQuiz}
        />
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-wrapper-light">
      <div className="form-card">
        <h2 className="form-heading">Questions:</h2>
        <hr className="form-divider" />

        <QuestionCard
          questionObj={currentQuestion}
          selectedAnswer={selectedAnswers[currentIndex]}
          onSelectAnswer={handleSelectAnswer}
        />

        <div className="submit-row">
          <button
            className="submit-green-btn"
            onClick={handleNext}
            disabled={selectedAnswers[currentIndex] === undefined}
          >
            {currentIndex === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}