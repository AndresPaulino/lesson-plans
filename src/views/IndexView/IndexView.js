import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Welcome } from './components';
import planifaiHero from 'public/assets/planifai_hero.png';
import Image from 'next/image';
import planifaiLogo from 'public/assets/planifai_logo.png';

const IndexView = () => {
  const testKey = process.env.NEXT_PUBLIC_TEST_KEY;
  console.log(testKey);

  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });

  const theme = useTheme();

  const styles = () => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${planifaiHero.src})`,

    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });

  return (
    <Main>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed='0.2'
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id='agency__portfolio-item--js-scroll'
        flexDirection={'column'}
      >
        <Box className={'jarallax-img'} sx={styles()} />
        <Box display={'flex'} justifyContent={'left'} alignItems={'center'} width={1} bgcolor={'transparent'}>
          <Box
            display={'flex'}
            component='a'
            href='/'
            title='planifAI'
            width={{ xs: 100, md: 120 }}
            margin={{
              xs: 2,
              md: '1rem 4rem',
            }}
          >
            <Image src={planifaiLogo} alt='planifAI' width={150} height={150} />
          </Box>
        </Box>
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Welcome />
          </Box>
        </Container>
      </Box>
    </Main>
  );
};

export default IndexView;
