// pages/index.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Image from 'next/image';
import sparkaplanLogo from 'public/assets/sparkaplan.png';

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: theme.palette.primary.dark,
}));

const Countdown = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: theme.palette.secondary.main,
}));

const RedirectButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const Welcome = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer = null;

    const redirect = () => {
      router.push('https://www.sparkaplan.com/').catch(() => {
        // If redirect fails, try again in 3 seconds
        setTimeout(() => {
          redirect();
        }, 3000);
      });
    };

    timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const countdownWatcher = setInterval(() => {
      if (countdown <= 0) {
        clearInterval(timer);
        clearInterval(countdownWatcher);
        redirect();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(countdownWatcher);
    };
  }, [countdown, router]);

  // Modal style
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    opacity: 0.9,
    borderRadius: 8,
    p: 4,
    outline: 'none', // Disable focus outline
  };

  return (
    <Modal open={true} onClose={() => {}} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
      <Box sx={modalStyle}>
        <Title variant='h2' align='center' id='modal-modal-title'>
          We&apos;ve Moved!
        </Title>
        <Typography variant='h4' align='center' id='modal-modal-description'>
          PlanifAI is now <span style={{ fontWeight: 800 }}>Spark</span>
          <span style={{ color: '#FFA500', fontWeight: 800 }}>a</span>
          <span style={{ fontWeight: 800 }}>plan</span>! - You will be redirected in:
        </Typography>
        {/* <Image src={sparkaplanLogo} alt='SparkAPlan Logo' width={150} height={100} /> */}
        <Countdown variant='h3' align='center' marginTop={2}>
          {countdown} seconds
        </Countdown>
        <Box display='flex' justifyContent='center'>
          <RedirectButton
            variant='contained'
            color='secondary'
            size='large'
            onClick={() => router.push('https://www.sparkaplan.com/')}
          >
            Take me there now
          </RedirectButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default Welcome;
