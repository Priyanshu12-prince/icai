import React, { useState } from 'react';
import '../css/PlayQuize.css';

const PlayQuize = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  // Sample quiz questions related to spending analysis
  const questions = [
    {
      id: 1,
      question: "What percentage of your income should ideally be saved each month?",
      options: [
        "5-10%",
        "20-30%",
        "40-50%",
        "60-70%"
      ],
      correctAnswer: "20-30%",
      explanation: "Financial experts recommend saving 20-30% of your income for a healthy financial future."
    },
    {
      id: 2,
      question: "Which of the following is considered a 'need' rather than a 'want'?",
      options: [
        "Designer clothes",
        "Monthly groceries",
        "Entertainment subscriptions",
        "Dining out frequently"
      ],
      correctAnswer: "Monthly groceries",
      explanation: "Monthly groceries are essential for survival, while the others are wants that can be reduced or eliminated."
    },
    {
      id: 3,
      question: "What is the 50/30/20 budgeting rule?",
      options: [
        "50% needs, 30% wants, 20% savings",
        "50% savings, 30% needs, 20% wants",
        "50% wants, 30% savings, 20% needs",
        "50% entertainment, 30% food, 20% bills"
      ],
      correctAnswer: "50% needs, 30% wants, 20% savings",
      explanation: "The 50/30/20 rule allocates 50% for needs, 30% for wants, and 20% for savings and debt repayment."
    },
    {
      id: 4,
      question: "Which spending habit is most likely to lead to financial problems?",
      options: [
        "Buying generic brands",
        "Using credit cards for everything",
        "Planning meals in advance",
        "Comparing prices before purchasing"
      ],
      correctAnswer: "Using credit cards for everything",
      explanation: "Relying heavily on credit cards without proper management can lead to debt accumulation and financial stress."
    },
    {
      id: 5,
      question: "What should you do before making a large purchase?",
      options: [
        "Buy immediately if you like it",
        "Wait 24-48 hours and consider if it's necessary",
        "Ask friends for their opinion only",
        "Check if it's on sale"
      ],
      correctAnswer: "Wait 24-48 hours and consider if it's necessary",
      explanation: "Taking time to think prevents impulse purchases and helps you make more rational financial decisions."
    }
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers, {
      question: questions[currentQuestion].question,
      selected: selectedAnswer,
      correct: questions[currentQuestion].correctAnswer,
      isCorrect: selectedAnswer === questions[currentQuestion].correctAnswer
    }];
    
    setAnswers(newAnswers);
    
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Excellent! You have great financial awareness.";
    if (percentage >= 60) return "Good job! You understand basic financial principles.";
    if (percentage >= 40) return "Not bad, but there's room for improvement.";
    return "Consider learning more about personal finance and spending habits.";
  };

  if (showResult) {
    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>Analyze Your Spending - Quiz Results</h2>
        </div>
        
        <div className="result-section">
          <div className="score-display">
            <h3>Your Score: {score} out of {questions.length}</h3>
            <div className="score-percentage">
              {Math.round((score / questions.length) * 100)}%
            </div>
            <p className="score-message">{getScoreMessage()}</p>
          </div>

          <div className="answers-review">
            <h4>Review Your Answers:</h4>
            {answers.map((answer, index) => (
              <div key={index} className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
                <p className="question-text">Q{index + 1}: {answer.question}</p>
                <p className="selected-answer">Your answer: {answer.selected}</p>
                {!answer.isCorrect && (
                  <p className="correct-answer">Correct answer: {answer.correct}</p>
                )}
                <p className="explanation">{questions[index].explanation}</p>
              </div>
            ))}
          </div>

          <button className="restart-btn" onClick={resetQuiz}>
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Analyze Your Spending</h2>
        <p>Explore your spending preferences in this activity</p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="question-counter">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <div className="question-section">
        <h3 className="question-text">
          {questions[currentQuestion].question}
        </h3>

        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`option-item ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(option)}
            >
              <div className="option-radio">
                <input
                  type="radio"
                  name="quiz-option"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelect(option)}
                />
              </div>
              <label className="option-label">{option}</label>
            </div>
          ))}
        </div>

        <div className="quiz-controls">
          <button
            className="next-btn"
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayQuize;

