import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

// Middlewares 
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(urlencoded());
app.use(express.static("public"));
app.use(cookieParser());

export default app;
