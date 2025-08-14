const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port:465,
        secure: true,
        auth:{
            user:"ovramenko.nikitka@gmail.com",
            pass:process.env.EMAIL_SMTP_PASS
        }
       })