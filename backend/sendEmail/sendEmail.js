const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const sendResetPasswordEmail = async (email, subject, payload) => {
  try {
   
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD, 
      },
    });
    
    const source = fs.readFileSync(
      path.join(__dirname, `./templates/requestResetPassword.handlebars`),
      "utf8"
    );
    const compiledTemplate = handlebars.compile(source);
    const options = () => {
      return {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: subject,
        html: compiledTemplate(payload),
      };
    };

    return new Promise((resolve, reject) => {
      // Send email
      transporter.sendMail(options(), (error, info) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("reset password email sent");
          resolve(info);
        }
      });
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};


module.exports = { sendResetPasswordEmail };