import axios from 'axios';

export const handler = async (event, context) => {
  try {
    const ip = event.queryStringParameters.ip || '8.8.8.8'; // get IP address from query parameter or use default value
    const response = await axios.get(`https://ipapi.com/ip_api.php?ip=${ip}`);
    console.log(response.data);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
};
