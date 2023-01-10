import React, { useState } from 'react';
import { Question } from './components';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Icon, IconButton, CircularProgress } from '@mui/material';
import axios from 'axios';

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
    answers: ['5 minutes', '10 minutes', '15 minutes', '30 minutes', '45 minutes', '1 hour', '1.5 hours', '2 hours'],
  },
];

const Questionnaire = ({ generateLessonPlan }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const prompt = () => {
    let prompt = `Create a very detailed teacher\'s lesson plan for ${answers[0]} that focuses on ${answers[1]} and takes no more than ${answers[2]} to complete. Return it as JSON with double quotes with the following properties: title, objective, materials, time, warmUp, directInstruction, guidedPractice, independentPractice, conclusion and debrief. List the materials and instructions as an array of strings. List the warmUp, directInstruction, guidedPractice, independentPractice, conclusion and debrief as objects with the following properties: title, description, time, and materials.`;
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
    await generateLessonPlan(prompt());
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
              marginTop: 5,
            }}
            onClick={handleSubmit}
          >
            {loading ? <CircularProgress size={24} color='inherit' /> : 'Generate my leson plan'}
          </Button>
          {loading && (
            <Typography variant='h6' gutterBottom my={5}>
              Please wait while planifAI generates your lesson plan. This can take up to 30 seconds.
            </Typography>
          )}
        </Box>
      )}
    </Container>
  );
};

const Response = ({ openaiResponse }) => {
  // convert the response to an object
  const response = JSON.parse(openaiResponse);
  const {
    title,
    objective,
    materials,
    time,
    warmUp,
    directInstruction,
    guidedPractice,
    independentPractice,
    conclusion,
    debrief,
  } = response;

  return (
    <Container>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} maxWidth={1} bgcolor={'white'}>
        <Typography variant='h4' gutterBottom my={5}>
          Here is your lesson plan!
        </Typography>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent={'center'}
          alignItems={'center'}
          padding={5}
          margin={5}
        >
          <Grid container spacing={2} my={5}>
            <Grid item xs={12} sm={6}>
              <Typography variant='h6' gutterBottom>
                <b>Title:</b> {title}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant='h6' gutterBottom>
                <b>Est time:</b> {time} minutes
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant='h6' gutterBottom>
                <b>Objective:</b> {objective}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant='h6' gutterBottom>
                <b>Materials:</b>{' '}
                {materials.map((material) => {
                  return (
                    <li
                      key={material}
                      sx={{
                        marginLeft: 2,
                      }}
                    >
                      {material}
                    </li>
                  );
                })}
              </Typography>

              <Typography variant='h6' gutterBottom my={5}>
                <b>Warm Up:</b> {warmUp.title}
                <br />
                <b>Description:</b> {warmUp.description}
                <br />
                <b>Time:</b> {warmUp.time} minutes
              </Typography>
              <Typography variant='h6' gutterBottom my={5}>
                <b>Instructions:</b> {directInstruction.title}
                <br />
                <b>Description:</b> {directInstruction.description}
                <br />
                <b>Time:</b> {directInstruction.time} minutes
              </Typography>
              <Typography variant='h6' gutterBottom my={5}>
                <b>Guided Practice:</b> {guidedPractice.title}
                <br />
                <b>Description:</b> {guidedPractice.description}
                <br />
                <b>Time:</b> {guidedPractice.time} minutes
              </Typography>
              <Typography variant='h6' gutterBottom my={5}>
                <b>Independent Practice:</b> {independentPractice.title}
                <br />
                <b>Description:</b> {independentPractice.description}
                <br />
                <b>Time:</b> {independentPractice.time} minutes
              </Typography>
              <Typography variant='h6' gutterBottom my={5}>
                <b>Conclusion:</b> {conclusion.title}
                <br />
                <b>Description:</b> {conclusion.description}
              </Typography>
              <Typography variant='h6' gutterBottom my={5}>
                <b>Debrief:</b> {debrief.title}
                <br />
                <b>Description:</b> {debrief.description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Button
          onClick={() => {
            window.location.reload();
          }}
          variant='contained'
          color='primary'
          size='large'
          sx={{ fontWeight: 700, borderRadius: 2, marginBottom: 5 }}
        >
          Start over
        </Button>
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
          <Box
            sx={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1614292264554-7dca1d6466d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)',
              backgroundPosition: 'center',
              backgroundSize: 'auto 100%',
            }}
          >
            <Response openaiResponse={openaiResponse} />
          </Box>
        ) : (
          <Questionnaire generateLessonPlan={generateLessonPlan} />
        )}
      </Box>
    </Main>
  );
};

export default Assessment;
