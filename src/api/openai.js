const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getResponse = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0.9,
      max_tokens: 1500,
      top_p: 1,
    });

    res.status(200).json(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error completing request' });
  }
};

export default getResponse;