const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_AUTH_USER,
    pass: process.env.NODEMAILER_AUTH_PASS
  }
})

const sendWelcomeEmail = (email, name) => {
  const mailOptions = {
    from: 'test@example.com',
    to: email,
    subject: 'Welcome to the Task App!',
    text: `Welcome to the app, ${name}. Enjoy using it ;)`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}

const sendCancelationEmail = (email, name) => {
  const mailOptions = {
    from: 'test@example.com',
    to: email,
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
