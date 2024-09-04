import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import mainRouter from "./routes/mainRouter.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://192.168.0.45:5173", "http://192.168.0.45:3000", "http://localhost:5173"],
    credentials: true,
  })
);
app.use("/", mainRouter);
app.use(express.static("views"));
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: "." });
});
app.listen(3000, () => console.log("Server is running on PORT:" + 3000));
