import { NextApiRequest, NextApiResponse } from 'next';
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getResponse = async (NextApiRequest, NextApiResponse) => {
  const { prompt } = NextApiRequest.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0.9,
      max_tokens: 1500,
      top_p: 1,
    });

    NextApiResponse.status(200).json(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
    NextApiResponse.status(500).json({ message: 'Error completing request' });
  }
};

export default getResponse;
