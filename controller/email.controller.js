import nodemailer from  'nodemailer';

export default function sendEmail(email,password){

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashmika1194@gmail.com',
    pass: 'ehexbodagritmowq'
  }
});

var mailOptions = {
  from: 'ashmika1194@gmail.com',
  to: email,
  subject: 'Verification Email',
  //html: '<a href="http://localhost:3000/verifyuser/"></a>'+email
  html:'<a href="http://localhost:3000/verifyuser/">Click here </a>'+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}