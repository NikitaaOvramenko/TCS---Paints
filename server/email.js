const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port:465,
        secure: true,
        auth:{
            user:process.env.EMAIL_SENDER,
            pass:process.env.EMAIL_SMTP_PASS
        }
       })