import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Page from '../components/Page';

import 'aos/dist/aos.css';
import 'public/assets/fonts/fonts.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

        <title>Lesson Plan Generator</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
