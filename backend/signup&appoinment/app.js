import express from "express";
import {config} from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import {errorMiddleware} from "./middlewares/errorMiddleware.js";

const app = express();
config({path: "./config/config.env"});

app.use(
    cors({
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        methods: ["GET" , "POST" , "PUT" , "DELETE"],
        credentials:true,
    })
);

app.use(cookieParser());
app.use(express.json());         //to pass json data as string
app.use(express.urlencoded({ extended: true}));      //detects diffe sting(name,date,etc)

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/temp/",
    })
);

/*
POST: http://localhost:4000/api/v1/message/send
*/
app.use("/api/v1/message", messageRouter);

dbConnection();

app.use(errorMiddleware);
export default app;
