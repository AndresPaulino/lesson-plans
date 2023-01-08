import React, { useState } from 'react';
import { Question } from './components';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import axios from 'axios';
import openai from 'openai';

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

const Questionnaire = ({ generateLessonPlan }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const prompt = () => {
    let prompt = `Create a teacher\'s lesson plan for ${answers[0]} that focuses on ${answers[1]} and takes no more than ${answers[2]} to complete.`;
    return prompt;
  };

  const handleNext = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // trigger the openai api call from /api/openai.js
    generateLessonPlan(prompt());
    setLoading(false);
  };

  return (
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
            onClick={handleSubmit}
          >
            {loading ? 'Loading...' : 'Generate Lesson Plan!'}
          </Button>
        </Box>
      )}
    </Container>
  );
};

const Response = ({ openaiResponse }) => {
  return (
    <Container>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} maxWidth={1} margin={'0 auto'}>
        <Typography variant='h4' gutterBottom>
          Here is your lesson plan!
        </Typography>
        <Box>
          <Typography>
            <pre>{openaiResponse}</pre>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

const Assessment = () => {
  const [openaiResponse, setOpenaiResponse] = useState('');
  const generateLessonPlan = async (prompt) => {
    const response = await axios.post('/api/openai', { prompt: prompt });
    setOpenaiResponse(response.data);
    console.log(response.data);
  };

  return (
    <Main>
      <Box>
        {openaiResponse ? (
          <Response openaiResponse={openaiResponse} />
        ) : (
          <Questionnaire generateLessonPlan={generateLessonPlan} />
        )}
      </Box>
    </Main>
  );
};

export default Assessment;
