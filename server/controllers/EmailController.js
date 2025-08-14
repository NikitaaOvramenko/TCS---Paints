const mailer = require('../email')

class EmailController {

   async sendEmail(req, res) {

    

  const { name, email, address, state, phone, zip, paintType } = req.body;
  
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

  const message = await mailer.sendMail({
    from: "ovramenko.nikitka@gmail.com",
    to: "nikita.ovramenkos@gmail.com",
    subject: "test",
    html: `
      <p>${name}</p>
      <p>${email}</p>
      <p>${phone}</p>
      <p>${address}, ${state}, ${zip}</p>
      <p>${paintType}</p>
    `,
    attachments
  });

  return res.json(message);
}


}

module.exports = new EmailController()