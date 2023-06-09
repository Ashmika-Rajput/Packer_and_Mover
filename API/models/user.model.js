//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    //required: [true,"Name is required"],
    required:false,
    lowercase: true,
    trim: true,
   
  },
  email: {
    type: String,
    //required: [true,"email is required"],
    required:false,
    unique: true,
    lowercase: true,
    trim: true,
    
  },
  password: {
    type: String,
    //required: [true,"Password is required"],
    required:false,
    maxlength: 10,
    minlength:5,
    trim: true,
    
  },
  mobile: {
    type: String,
    //required: [true,"Mobile is required"],
    required:false,
    maxlength: 10,
    minlength:10,
    trim: true,
    
  },
  address: {
    type: String,
    //required: [true,"Address is required"],
    required:false,
    trim: true,
   
  },
  city: {
    type: String,
    //required: [true,"City is required"],
    required:false,
    trim: true,
   
  },
  gender: {
    type: String,
    //required: [true,"Gender is required"],
    required:false,
   
  },
  role: String,
  status: Number,
  info: String
});

// Apply the uniqueValidator plugin to UserSchema.
UserSchema.plugin(uniqueValidator);

// compile schema to model
mongoose.pluralize(null);
const UserSchemaModel = mongoose.model('user_collection',UserSchema);

export default UserSchemaModel