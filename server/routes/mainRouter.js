import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const mainRouter = express.Router();

mainRouter.route("/register").post(createUser);
mainRouter.route("/login").post(loginUser);
mainRouter.route("/dashboard").get((req, res) => {
  console.log("route");
  res.send("asd");
});

export default mainRouter;
