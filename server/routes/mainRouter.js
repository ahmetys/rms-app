import express from "express";
import { createUser } from "../controllers/userController.js";
const mainRouter = express.Router();

mainRouter.route("/register").post(createUser);

export default mainRouter;
