import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Message } from "../models/messageSchema.js";
import { User } from "../models/userSchema.js";
import {generateToken} from "../utils/jwtToken.js";

export const patientRegister = catchAsyncErrors(async(req, res, next) =>{
    const {
        firstName, 
        lastName, 
        email, 
        phone, 
        password,
        dob, 
        gender, 
        role
    } = req.body;
    if(
        !firstName || 
        !lastName || 
        !email || 
        !phone ||
        !password ||
        !dob ||
        !gender || 
        !role
    ){
       return next(new ErrorHandler("Please Fill full form!", 400)); 
    }
    let user = await User.findOne({ email });
    if(user){
        return next(new ErrorHandler("User Already Regist!", 400));
    }
    user = await User.create({
        firstName, 
        lastName, 
        email, 
        phone, 
        password,
        dob, 
        gender, 
        role
    });
    generateToken(user, "User Registered!", 200, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password, confirmPassword, role } = req.body;
    if (!email || !password || !confirmPassword || !role) {
        return next(new ErrorHandler("Please provide All Details!", 400));
    }
    if (password !== confirmPassword) {
        return next(
            new ErrorHandler("Password & Confirm Password Do Not Match!", 400)
        );
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid Email Or Password!", 400));
    }
  
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid Email Or Password!", 400));
    }
    if (role !== user.role) {
        return next(new ErrorHandler(`User Not Found With This Role!`, 400));
    }
    generateToken(user, "User Login Successfully!", 200, res);
});