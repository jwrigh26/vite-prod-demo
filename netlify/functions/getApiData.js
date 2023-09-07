import axios from 'axios';

exports.handler = async function (event, context) {
  const API_TOKEN = process.env.API_TOKEN;

  try {
    const response = await axios.get('Your API URL here', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        // other headers here
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
