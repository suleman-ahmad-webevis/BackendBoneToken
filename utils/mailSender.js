const nodemailer = require("nodemailer");

async function mailSender() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to: "bbb@gmail.com", // list of receivers
    subject: "Welcome to bonetoken", // Subject line
    text: "You have been successfully registered with bone token", // plain text body
  });
}

mailSender().catch(console.error);
module.exports = mailSender;
