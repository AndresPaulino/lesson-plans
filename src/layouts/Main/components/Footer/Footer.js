import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import planifaiLogo from 'public/assets/planifai_logo.png';

const Footer = () => {
  return (
    <Grid container spacing={2} justifyContent={'center'} alignItems={'center'} alignContent={'center'} p={4}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          alignContent={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box display={'flex'} component='a' href='/' title='theFront' width={80}>
            <Image src={planifaiLogo} alt='planifAI' width={75} height={75} />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        width={1}
        flexDirection={'column'}
      >
        <Typography align={'center'} variant={'subtitle2'} color='text.secondary' gutterBottom>
          &copy; planifAI 2023. All rights reserved
        </Typography>
        <Typography align={'center'} variant={'caption'} color='text.secondary' component={'p'}>
          planifAI was made with &#128154; by Andres Paulino. It is a project using Chat-GPT to help teachers forumluate
          quick and easy lesson plans. If you would like contact me, please do so at paulinoandresmiguel@gmail.com or
          visit my portfolio at{' '}
          <Link href='https://andrespaulino.com' target='_blank' rel='noopener noreferrer'>
            andrespaulino.com
          </Link>
        </Typography>
        <Typography align={'center'} variant={'caption'} color='text.secondary' component={'p'}>
          This project is open source and can be found on{' '}
          <Link
            href='
          '
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
