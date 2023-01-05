import React, { useState } from 'react';
import { Question } from './components';

const QUESTIONS = [
  {
    text: 'What is your favorite color?',
    answers: ['Red', 'Green', 'Blue'],
  },
  {
    text: 'What is your favorite animal?',
    answers: ['Dog', 'Cat', 'Fish'],
  },
  {
    text: 'What is your favorite hobby?',
    answers: ['Reading', 'Sports', 'Music'],
  },
];

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSubmit = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < QUESTIONS.length ? (
        <Question question={QUESTIONS[currentQuestion]} onSubmit={handleSubmit} />
      ) : (
        <p>Thank you for completing the questionnaire!</p>
      )}
    </div>
  );
};

export default Assessment;
