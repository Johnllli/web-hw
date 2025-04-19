import React, { useState } from 'react';


const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Rome", "America"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6","Math equation"],
    answer: "Math equation"
  },
  {
    question: "What color do you get when you mix red and blue?",
    options: ["Green", "Purple", "Orange", "Brown"],
    answer: "Purple"
  },
  {
    question: "What is the molecular shape of methane(CH4)",
    options: ["Linear", "Octahedral", "Seesaw", "Tetraheral"],
    answer: "Tetraheral"
  },
  {
    question: "What fruit does doctor fear most",
    options: ["Gun","T-800", "Fire-ball", "Pineapple", "Apple"],
    answer: "Apple"
  }

];

function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  const show_answer_index = false;
  

  return (
    <div className="showapp">
      <h2>Quiz App</h2>
      



      {finished ? (
        <div>
          <p>You scored {score} out of {questions.length}!</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <p>Question {current + 1}</p>
          <p>{questions[current].question}</p>
          <div className="options">
            {questions[current].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
