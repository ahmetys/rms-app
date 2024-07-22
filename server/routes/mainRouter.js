import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import { createCustomer, getAllCustomers } from "../controllers/customerController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const mainRouter = express.Router();

mainRouter.route("/register").post(createUser);
mainRouter.route("/login").post(loginUser);
mainRouter.route("/dashboard").get(authMiddleware, (req, res) => {
  console.log("route");
  res.send("asd");
});
mainRouter.route("/api/customers/createCustomer").post(authMiddleware, createCustomer);
mainRouter.route("/api/customers/getAllCustomers").get(authMiddleware, getAllCustomers);
// mainRouter.route("/api/customers/getAllCustomers").get(getAllCustomers);

export default mainRouter;
