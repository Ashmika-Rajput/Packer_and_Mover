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
  //html:'<a href="http://localhost:3000/verifyuser/">Click here </a>'+email
  html:"<h1>Welcome to Porter</h1><p>You have successfully registered on Porter , your login credentials are attached below</p><h3>Username : "+email+"</h3><h3>Password : "+password+"</h3><h2>Click on the link below to verify account</h2><a href='http://localhost:3000/verifyuser/"+email+"'>Link</a>",
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}