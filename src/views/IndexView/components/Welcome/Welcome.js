/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Welcome = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant='h3'
        align={'center'}
        gutterBottom
        color={'white'}
        sx={{
          fontWeight: 900,
          textShadow: '0 0 10px rgba(0,0,0,0.3)',
        }}
      >
        Generate your next lesson plan in minutes.
      </Typography>
      <Typography
        variant='h6'
        component='p'
        color='white'
        align={'center'}
        sx={{
          fontWeight: 400,
          textShadow: '0 0 10px rgba(0,0,0,0.5)',
        }}
      >
        Use the power of AI to quickly generate lesson plans for you and your students.
        <br /> Choose what grade, subject and topic you want to teach and planifAI will generate a lesson plan for you.
      </Typography>
    </Box>
  );

  const StartNowCTA = () => (
    <Box display='flex' flexWrap='wrap' justifyContent={'center'} width={1}>
      <Button
        variant='contained'
        size='large'
        onClick={() => {
          window.location.href = '/assessment';
        }}
        sx={{
          fontWeight: 700,
          borderRadius: 2,
          textTransform: 'none',
          boxShadow: theme.shadows[4],
          '&:hover': {
            boxShadow: theme.shadows[8],
            bgcolor: '#35decc',
          },
          bgcolor: '#1fcbb7',
        }}
      >
        Get Started
      </Button>
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box width='100%' height='100%' display='flex' justifyContent={'center'}>
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box width='100%' height='100%' display='flex' justifyContent={'center'}>
            <StartNowCTA />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
