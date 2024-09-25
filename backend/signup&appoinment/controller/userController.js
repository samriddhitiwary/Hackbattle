import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Message } from "../models/messageSchema.js";
import { User } from "../models/userSchema.js";

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
    res.status(200).json({
        success: true,
        message: "User Registered!", 
    });
});