import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import { createCustomer, getAllCustomers } from "../controllers/customerController.js";
import { newServiceType, getServiceList, updateServiceType, deleteServiceType } from "../controllers/serviceController.js";
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
mainRouter.route("/api/services/newServiceType").post(authMiddleware, newServiceType);
mainRouter.route("/api/services/getServiceList").get(authMiddleware, getServiceList);
mainRouter.route("/api/services/updateServiceType/:id").put(authMiddleware, updateServiceType);
mainRouter.route("/api/services/deleteServiceType/:id").delete(authMiddleware, deleteServiceType);
// mainRouter.route("/api/customers/getAllCustomers").get(getAllCustomers);

export default mainRouter;
