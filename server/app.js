import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import mainRouter from "./routes/mainRouter.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use("*", authMiddleware);
//app.options(cors(corsConfig));
//app.use("*", checkUser);
app.use("/", mainRouter);
app.listen(process.env.PORT, () => console.log("Server is running on PORT:" + process.env.PORT));
