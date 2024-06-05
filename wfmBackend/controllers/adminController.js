import employeeModel from "../models/employeeModel.js";
import userModel from "../models/userModel.js";

// Approve Users as employee
export const ApproveEmployee=async(req,res)=>{
    const{userId}=req.params;
    const{employmentType,position,department,isCertificateVerified}=req.body;
    try {
        const validUser=await userModel.findById(userId);
        if(!validUser){
            res.status(400).json({
                message:"User cannot be found"
            })
            return
        }
        if(validUser.isEmployee){
            res.status(400).json({
                message:"User is already an employee"
            })
            return
        }
        const updatedUser=await userModel.findByIdAndUpdate(userId,{
            isEmployee:true
        },{new:true})
        
        const newEmployee= new employeeModel({
            userId,
            employmentType,
            position,
            department,
            isCertificateVerified
        })

        await newEmployee.save();
        
        const{username,...rest}=updatedUser._doc;
        res.status(200).json({
            message:`Successfully approved as an employee ${username}`
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}


// Get Details of all employees
export const GetAllEmployees=async(req,res)=>{
    try {
        const allEmployeeDetails=await employeeModel.find().populate('userId');
        if(!allEmployeeDetails || allEmployeeDetails.length===0){
            res.status(404).json({
                message:"No Employee Records found"
            })
            return
        }
        res.status(200).json({
            employees:allEmployeeDetails,
            totalEmployees:allEmployeeDetails.length,
            message:"Successfully Retrieved Data"
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

// Get Details of all registered users
export const GetAllUsers=async(req,res)=>{
    try {
        const allUserDetails=await userModel.find();
        if(!allUserDetails || allUserDetails.length===0){
            res.status(404).json({
                message:"No Users Found"
            })
            return
        }
        res.status(200).json({
            users:allUserDetails,
            totalUsers:allUserDetails.length,
            message:"Successfully Retrieved Data"
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}


//Get User Details By Id
export const GetEmplpoyeeById=async(req,res)=>{
    const{employeeId}=req.params;
    try {
        const validEmployee=await employeeModel.findById(employeeId).populate('userId');
        if(!validEmployee){
            res.status(400).json({
                message:"Employee Doesn't Exists"
            })
            return
        }
        const{password,...employeeDetails}=validEmployee._doc;
        res.status(200).json({
            employeeDetails:employeeDetails,
            message:`Successfully retrieved ${employeeDetails.username} details`
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}