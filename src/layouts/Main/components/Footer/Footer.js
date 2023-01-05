import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box display={'flex'} component='a' href='/' title='theFront' width={80}>
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                  : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
              }
              height={1}
              width={1}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align={'center'} variant={'subtitle2'} color='text.secondary' gutterBottom>
          &copy; planifAI 2023. All rights reserved
        </Typography>
        <Typography align={'center'} variant={'caption'} color='text.secondary' component={'p'}>
          planifAI was made with love by Andres Paulino. It is a project using Chat-GPT to help teachers
          forumluate quick and easy lesson plans. If you would like contact me, please do so at
          paulinoandresmiguel@gmail.com or visit my website at{' '}
          <Link href='https://andrespaulino.com' target='_blank' rel='noopener noreferrer'>
            andrespaulino.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
