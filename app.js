import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

//import routes for route level middleware
import UserRouter from './routes/user.router.js'; 

//configuration to handle cross origin request
app.use(cors());

//configuration to extract request body content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

//to link route in route level middleware
app.use("/user",UserRouter);


app.listen(3001);
console.log("server invoked at link http://localhost:3001");