import React, { useState } from 'react';
import { Question } from './components';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

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

  const handleNext = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  console.log(answers);

  return (
    <Main>
      <Container>
        {currentQuestion < QUESTIONS.length ? (
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} maxWidth={1} margin={'0 auto'}>
            <Typography variant='h4' gutterBottom>
              Assessment
            </Typography>
            <Question question={QUESTIONS[currentQuestion]} onNext={handleNext} />
          </Box>
        ) : (
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} maxWidth={1} margin={'0 auto'}>
            <Typography variant='h4' gutterBottom>
              Thank you for completing the assessment!
            </Typography>
            <Button
              variant='contained'
              color='primary'
              size='large'
              sx={{
                fontWeight: 700,
                borderRadius: 2,
                textTransform: 'none',
              }}
            >
              Generate My Lesson Plan!
            </Button>
          </Box>
        )}
      </Container>
    </Main>
  );
};

export default Assessment;
