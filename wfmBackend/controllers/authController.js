import userModel from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const RegisterUser=async(req,res)=>{
    const{firstname,lastname,email,phonenumber,address,username,password}=req.body;
    try {
        const userExist=await userModel.findOne({
            $or:[
                {email:email},
                {username:username}
            ]
        })
        if(userExist){
            res.status(400).json({
                message:"User already Exists"
            })
            return
        }

        const hashedPassword=bcryptjs.hashSync(password,10);

        const newUser=new userModel({
            firstname,
            lastname,
            username,
            email,
            password:hashedPassword,
            address,
            phonenumber
        })
        await newUser.save();

        res.status(201).json({
            message:`${username} user has been registered successfully`
        })

    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

export const LoginUser=async(req,res)=>{
    const{usernameOrEmail,password}=req.body;
    try {
        const validUser=await userModel.findOne({
            $or:[
                {email:usernameOrEmail},
                {username:usernameOrEmail}
            ]
        })
        if(!validUser){
            res.status(400).json({
                message:"Username or Email doesn't exists"
            })
            return
        }
        const validPassword=bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            res.status(401).json({
                message:"Check Your Password"
            })
            return
        }

        const token=jwt.sign({id:validUser._id},process.env.jwt_secret_key);
        const{password:excludePassword,...userDetails}=validUser._doc;
        res.cookie('access_token',token,{httpOnly:true})
            .status(200)
            .json({
                userDetails:userDetails,
                message:`Welcome ${usernameOrEmail}`
            })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Internal Server Error"
        })    
    }
}
