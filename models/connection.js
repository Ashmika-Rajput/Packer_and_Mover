import mongoose from 'mongoose';
const url="mongodb://127.0.0.1:27017/Packer_and_Mover";
mongoose.set('strictQuery', true);
mongoose.connect(url);
console.log("Successfully connected to mongodb database server...");
