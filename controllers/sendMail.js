const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'garth.adams@ethereal.email',
        pass: 'uhFfJpTt6xKj4anGgr'
    },
  });

  let info = await transporter.sendMail({
    from: '"sumitnegi 👻" <sumit@gmail.com>', // sender address
    to: "iam@gmail.com", // list of receivers
    subject: "Hello world", // Subject line
    text: "Hello text", // plain text body
    html: "<b>Hello html</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
