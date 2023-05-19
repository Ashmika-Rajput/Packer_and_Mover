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
  //html:"<a href='http://localhost:3000/verifyuser/"+email+"'>Click here </a>",
     //above linking is working,but without any content,simply click here link to verify user
  html:"<h1>Welcome to Packers and Movers</h1><p>You have successfully registered, your login credentials are attached below</p><h3>Username : "+email+"</h3><h3>Password : "+password+"</h3><a href='http://localhost:3000/verifyuser/"+email+"'>Click on this link below to verify account</a>",
    //this link is with content like welcome to packers and movers,username etc.
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}