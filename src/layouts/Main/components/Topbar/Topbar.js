import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Image from 'next/image';
import planifaiLogo from 'public/assets/planifai_logo.png';

const Topbar = () => {
  return (
    <Box display={'flex'} justifyContent={'left'} alignItems={'center'} width={1}>
      <Box display={'flex'} component='a' href='/' title='planifAI' width={{ xs: 100, md: 120 }}>
        <Image src={planifaiLogo} alt='planifAI' width={75} height={75} />
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
