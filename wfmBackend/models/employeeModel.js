import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required:true,
        unique:true
    },
    employmentType:{
        type:String,
        required:true,
        default:"fulltime"
    },
    salary:{
        type:Number,
        required:true,
        default:0
    },
    position:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true,
    },
    isCertificateVerified:{
        type:Boolean,
        required:true,
        default:false
    },
    isTrainingCompleted:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true})

const employeeModel=mongoose.model('EmployeeModel',employeeSchema);

export default employeeModel;