const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;
  const options = {
    from: process.env.MAIL_FROM,
    to,
    subject,
    html: text,
  };

  if (!to || !subject || !text) {
    return res.status(400).json({
      status: 400,
      error: "Please provide all required fields",
    });
  }

  try {
    await transporter.sendMail(options);
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email" + error });
  }
};

module.exports = { sendEmail };
