const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
  if (event.httpMethod !== 'POST') {
    return callback(null, { statusCode: 405, body: 'Method Not Allowed' });
  }

  // create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD,
    },
  });

  const { email, subject, body } = JSON.parse(event.body);
  transporter.sendMail(
    {
      from: process.env.CONTACT_EMAIL,
      to: process.env.DESTINATION_EMAIL,
      subject: `${subject} [${email}]`,
      text: body,
    },
    function(error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: 'Ok',
        });
      }
    }
  );
};
