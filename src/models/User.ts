import { Schema, model, Document } from 'mongoose';
import mongoose from "mongoose"

interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  postalCode: string;
  state: string;
  ssn: string;
  dateOfBirth: Date;
  address: string;
  VerifyCode:string ;
  VerifyCodeExpiry:Date ;
  
}

const userSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  postalCode: { type: String, required: true },
  state: { type: String, required: true },
  ssn: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
  VerifyCode:{
    type:String  ,
    required:true
  }, 
  VerifyCodeExpiry:Date
});

const User = mongoose.models.User as mongoose.Model<IUser> ||



mongoose.model<IUser>('User', userSchema);

export default User;
