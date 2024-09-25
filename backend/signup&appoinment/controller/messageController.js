import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) =>{
    const { firstName, lastName, email, phone } = req.body;
    if (!firstName || !lastName || !email || !phone ) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    await Message.create({ firstName, lastName, email, phone });
    res.status(200).json({
      success: true,
      message: "Message Sent!",
    });
});
  
//   export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
//     const messages = await Message.find();
//     res.status(200).json({
//       success: true,
//       messages,
//     });
// });