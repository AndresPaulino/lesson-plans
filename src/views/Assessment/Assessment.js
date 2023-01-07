import React, { useState } from 'react';
import { Question } from './components';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const QUESTIONS = [
  {
    text: 'What grade are you teaching?',
    answers: [
      'Pre-K',
      'Kindergarten',
      '1st Grade',
      '2nd Grade',
      '3rd Grade',
      '4th Grade',
      '5th Grade',
      '6th Grade',
      '7th Grade',
      '8th Grade',
      '9th Grade',
      '10th Grade',
      '11th Grade',
      '12th Grade',
    ],
  },
  {
    text: 'What subject would you like to base your lesson on?',
    answers: [
      'English',
      'Math',
      'Science',
      'History',
      'Art',
      'Music',
      'Geography',
      'Biology',
      'Chemistry',
      'Physics',
      'Social Studies',
      'Technology',
    ],
  },
  {
    text: 'How long do you want your lesson to be?',
    answers: ['15 minutes', '30 minutes', '45 minutes', '1 hour', '1.5 hours', '2 hours'],
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
              Question {currentQuestion + 1} of {QUESTIONS.length}
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
