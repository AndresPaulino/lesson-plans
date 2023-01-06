import React, { useState } from 'react';
import { Question } from './components';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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

  console.log(answers);

  return (
    <Main>
      <Container>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} maxWidth={1} margin={'0 auto'}>
          <Typography variant='h4' gutterBottom>
            Assessment
          </Typography>
        </Box>
        {currentQuestion < QUESTIONS.length ? (
          <Question question={QUESTIONS[currentQuestion]} onSubmit={handleSubmit} />
        ) : (
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} maxWidth={1} margin={'0 auto'}>
            <Typography variant='h4' gutterBottom>
              Thank you for taking the assessment!
            </Typography>
          </Box>
        )}
      </Container>
    </Main>
  );
};

export default Assessment;
