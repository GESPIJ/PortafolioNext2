//const transporter = require("../../src/config/mail");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const sendEmail = async (req, res) => {
  console.log(req.body);
  const data = req.body;

  const transporter = nodemailer.createTransport(
    sendGridTransport({
      auth: {
        api_key:
          "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",
      },
    })
  );

  try {
    const resp = await transporter.sendMail({
      to: "gregspinetti@gmail.com",
      from: "gregspinetti@gmail.com",
      subject: "Clave temporal",
      html: `<h3>${"Parece que tienes un nuevo mensaje en tu página web"}</h3>
      <p>${data.mensaje} del correo ${data.email}</p>`,
    });
  } catch (e) {
    console.log("Hubo un error, es el siguiente");
    console.log(e.toString());
  }
  //   const transporter = nodemailer.createTransport({
  //     port: 465,
  //     host: "smtp.gmail.com",
  //     auth: {
  //       user: "demo@demo.gmail",
  //       pass: "password",
  //     },
  //     secure: true,
  //   });
  //sconsole.log(req.body);
};

export default sendEmail;
