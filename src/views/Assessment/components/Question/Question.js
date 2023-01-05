/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Question = ({ question, onSubmit }) => {
  const { text, answers } = question;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedAnswer);
  };

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{text}</p>
      {answers.map((answer) => (
        <div key={answer}>
          <input type='radio' value={answer} checked={selectedAnswer === answer} onChange={handleChange} />
          <label>{answer}</label>
        </div>
      ))}
      <button type='submit'>Next</button>
    </form>
  );
};

export default Question;
