const mailer = require('../email')

class EmailController {

   async sendEmail(req, res) {

    console.log(process.env.EMAIL_RECIEVERS)
    const toEmails = process.env.EMAIL_RECIEVERS.split(',');
    console.log(toEmails)
    const fromEmail = process.env.EMAIL_SENDER
    

  const { name, email,address, state, phone, zip, paintType } = req.body;
  
  const pics = req.files?.pics;

  let picArray = [];

if (pics) {
  if (Array.isArray(pics)) {
    picArray = pics;
  } else {
    picArray = [pics];
  }
} else {
  picArray = [];
}

  const attachments = picArray.map(file => ({
    filename: file.name,
    content: file.data
  }));

  const result = []

  toEmails.forEach(async toEmail => {
    result.push(await mailer.sendMail({
    from: `${fromEmail}`,
    to: `${toEmail}`,
    subject: `${name} Paint Lead`,
    html: `
      <p>${name}</p>
      <p>${email}</p>
      <p>${phone}</p>
      <p>$${address}, ${state}, ${zip}</p>
      <p>${paintType}</p>
    `,
    attachments
  }))
  });

   await mailer.sendMail({
    from: `${fromEmail}`,
    to: `${email}`,
    subject: `Thank You For Reaching Us !`,
    html: `
    <p>Dear ${name},</p>
  <p>Thank you for reaching out to us! We have received your message and our team will get back to you shortly.</p>
  <p>If your inquiry is urgent, please call us at (647)809-7778 for immediate assistance.</p>
  <p>Best regards,<br/>The Team</p>
    `,
    attachments
  })

  return res.json(result);
}
}

module.exports = new EmailController()