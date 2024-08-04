import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import { createCustomer, getAllCustomers, getCustomerById, getCustomerByName, updateCustomer, deleteCustomer } from "../controllers/customerController.js";
import { newServiceType, getServiceList, updateServiceType, deleteServiceType } from "../controllers/serviceController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  newDeviceType,
  getAllDeviceDefinitions,
  updateDeviceType,
  deleteDeviceType,
  newDeviceBrand,
  getAllDeviceBrands,
  updateDeviceBrand,
  deleteDeviceBrand,
  getDeviceBrandsByDeviceType,
  newDeviceModel,
  updateDeviceModel,
  deleteDeviceModel,
  getDeviceModelsByDeviceBrand,
} from "../controllers/deviceDefinitionsController.js";
const mainRouter = express.Router();

mainRouter.route("/register").post(createUser);
mainRouter.route("/login").post(loginUser);
mainRouter.route("/api/customers/createCustomer").post(authMiddleware, createCustomer);
mainRouter.route("/api/customers/getAllCustomers").get(authMiddleware, getAllCustomers);
mainRouter.route("/api/customers/getCustomerById/:customerId").get(authMiddleware, getCustomerById);
mainRouter.route("/api/customers/getCustomerByName").post(authMiddleware, getCustomerByName);
mainRouter.route("/api/customers/updateCustomer").put(authMiddleware, updateCustomer);
mainRouter.route("/api/customers/deleteCustomer/:customerId").delete(authMiddleware, deleteCustomer);
mainRouter.route("/api/services/newServiceType").post(authMiddleware, newServiceType);
mainRouter.route("/api/services/getServiceList").get(authMiddleware, getServiceList);
mainRouter.route("/api/services/updateServiceType/:id").put(authMiddleware, updateServiceType);
mainRouter.route("/api/services/deleteServiceType/:id").delete(authMiddleware, deleteServiceType);

//DEVICE DEFINITIONS
mainRouter.route("/api/deviceDefinitions/getAllDeviceDefinitions").get(authMiddleware, getAllDeviceDefinitions);

//DEVICE TYPE CRUD
mainRouter.route("/api/deviceDefinitions/newDeviceType").post(authMiddleware, newDeviceType);
mainRouter.route("/api/deviceDefinitions/updateDeviceType").put(authMiddleware, updateDeviceType);
mainRouter.route("/api/deviceDefinitions/deleteDeviceType/:deviceTypeId").delete(authMiddleware, deleteDeviceType);
//DEVICE BRAND CRUD
mainRouter.route("/api/deviceDefinitions/newDeviceBrand").post(authMiddleware, newDeviceBrand);
mainRouter.route("/api/deviceDefinitions/updateDeviceBrand").put(authMiddleware, updateDeviceBrand);
mainRouter.route("/api/deviceDefinitions/deleteDeviceBrand/:deviceTypeId/:deviceBrandId").delete(authMiddleware, deleteDeviceBrand);
mainRouter.route("/api/definitions/getDeviceBrandsByDeviceType/:deviceTypeId").get(authMiddleware, getDeviceBrandsByDeviceType);
// mainRouter.route("/api/definitions/getAllDeviceBrands").get(authMiddleware, getAllDeviceBrands);
//DEVICE MODEL CRUD
mainRouter.route("/api/deviceDefinitions/newDeviceModel").post(authMiddleware, newDeviceModel);
mainRouter.route("/api/definitions/updateDeviceModel/:deviceModelId").put(authMiddleware, updateDeviceModel);
mainRouter.route("/api/definitions/deleteDeviceModel/:deviceModelId").delete(authMiddleware, deleteDeviceModel);
mainRouter.route("/api/definitions/getDeviceModelsByDeviceBrand/:deviceBrandId").get(authMiddleware, getDeviceModelsByDeviceBrand);
// mainRouter.route("/api/customers/getAllCustomers").get(getAllCustomers);

export default mainRouter;
