import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isEmployee:{
        type:Boolean,
        default:false,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
        required:true
    }
},{timestamps:true})

const userModel=mongoose.model('UserModel',userSchema);

export default userModel;