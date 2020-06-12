"use strict";
const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
module.exports.sendEmail = async function (html) {
  // settings generate 
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    auth: {
      user: "aryapranjal1999@gmail.com", // generated ethereal user
      pass: "imdpsfkbmuzldozo"// generated ethereal password
    },
  });
  // send mail with defined transport object
  await transporter.sendMail({
    from: '"PRANJAL 👻" <aryapranjal1999@gmail.com>', // sender address
    to: "aryapranjal1999@gmail.com", // list of receivers
    subject: "Notice",
    html: html, // html body
  });
}