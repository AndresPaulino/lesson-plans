import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Welcome, Goby } from './components';

const IndexView = () => {
  return (
    <Main>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
        marginTop={-13}
        paddingTop={13}
      >
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
