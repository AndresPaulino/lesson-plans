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
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
