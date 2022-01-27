const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      mail_api_key: proccess.env.mailApiKey,
    },
  })
);

export default transporter;
