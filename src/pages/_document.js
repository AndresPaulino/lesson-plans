import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <link rel='shortcut icon' href='public/assets/planifai_logo.png' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='description' content='AI powered lesson plan generator for teachers' />
        <meta name='robots' content='max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='planifAI by Andres Paulino' />
        <meta property='og:description' content='AI powered lesson plan generator for teachers' />
        <meta property='og:url' content='https://planifai.vercel.app/' />
        <meta property='og:site_name' content='planifAI by Andres Paulino' />
        <meta property='og:image' content='public/assets/planifai_logo.png' />
        <link rel='preload' href='public/fonts/BadScript-Regular.ttf' as='font' type='font/ttf' crossOrigin='' />
        <link rel='preload' href='public/fonts/KGMissKindergarten.ttf' as='font' type='font/ttf' crossOrigin='' />
      </Head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: '"Badscript", cursive',
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
