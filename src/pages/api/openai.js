/* eslint-disable import/no-anonymous-default-export */
const openai = require('openai');

openai.apiKey = OPENAI_API_KEY;

export default (req, res) => {
  const { prompt } = req.query;

  openai.completions.create(
    {
      model: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 2048,
      n: 1,
      stop: '.',
    },
    function (error, response) {
      if (error) {
        console.log(error);
        res.status(500).json({ error: error });
      } else {
        res.status(200).json({ response: response.choices[0].text });
      }
    }
  );
};
