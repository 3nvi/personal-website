import querystring from 'querystring';

exports.handler = async event => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { email, subject, body } = querystring.parse(event.body);
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
