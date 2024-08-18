import { createContext, useContext, useEffect, useReducer } from "react";
import { DefinitionsReducer } from "../reducer/DefinitionsReducer";
import axios from "axios";

const DefinitionsContext = createContext(null);

export function DefinitionsProvider({ children }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [deviceDefinitions, dispatch] = useReducer(DefinitionsReducer, []);
  useEffect(() => {
    getAllDeviceDefinitions();
  }, []);

  const getAllDeviceDefinitions = async () => {
    const response = await axios.get(`${API_URL}/api/deviceDefinitions/getAllDeviceDefinitions`, { withCredentials: true });
    return dispatch({ type: "GET_ALL_DEVICE_DEFINITIONS", payload: response.data });
  };

  const addNewDeviceType = async (deviceType) => {
    const response = await axios.post(`${API_URL}/api/deviceDefinitions/newDeviceType`, { deviceType }, { withCredentials: true });
    return dispatch({ type: "ADD_NEW_DEVICE_TYPE", payload: response.data.deviceType });
  };

  const updateDeviceType = async (deviceType) => {
    const response = await axios.put(`${API_URL}/api/deviceDefinitions/updateDeviceType`, { ...deviceType }, { withCredentials: true });
    return dispatch({ type: "UPDATE_DEVICE_TYPE", payload: response.data.deviceType });
  };

  const deleteDeviceType = async (deviceTypeId) => {
    const response = await axios.delete(`${API_URL}/api/deviceDefinitions/deleteDeviceType/${deviceTypeId}`);
    return dispatch({ type: "DELETE_DEVICE_TYPE", payload: { deviceTypeId: deviceTypeId } });
  };

  const addNewDeviceBrand = async (deviceBrand) => {
    const response = await axios.post(`${API_URL}/api/deviceDefinitions/newDeviceBrand`, { ...deviceBrand }, { withCredentials: true });
    return dispatch({ type: "ADDED_NEW_DEFINITION", payload: response.data.deviceType });
  };

  const updateDeviceBrand = async (deviceBrand) => {
    const response = await axios.put(`${API_URL}/api/deviceDefinitions/updateDeviceBrand`, { ...deviceBrand }, { withCredentials: true });
    console.log(response.data);
    return dispatch({ type: "UPDATE_DEVICE_BRAND", payload: response.data.deviceType });
  };

  const deleteDeviceBrand = async (deviceBrand) => {
    const response = await axios.delete(`${API_URL}/api/deviceDefinitions/deleteDeviceBrand/${deviceBrand.deviceTypeId}/${deviceBrand.deviceBrandId}`);
    return dispatch({ type: "DELETE_DEVICE_BRAND", payload: { ...deviceBrand } });
  };

  const addNewDeviceModel = async (deviceModel) => {
    const response = await axios.post(`${API_URL}/api/deviceDefinitions/newDeviceModel`, { ...deviceModel }, { withCredentials: true });
    return dispatch({ type: "ADDED_NEW_DEFINITION", payload: response.data.deviceType });
  };

  const updateDeviceModel = async (deviceModelId, deviceModel) => {
    const response = await axios.put(`${API_URL}/api/deviceDefinitions/updateDeviceModel/${deviceModelId}`, { deviceModel }, { withCredentials: true });
    return dispatch({ type: "UPDATE_DEVICE_MODEL", payload: response.data.deviceModel });
  };

  const deleteDeviceModel = async (deviceModel) => {
    const response = await axios.delete(`${API_URL}/api/deviceDefinitions/deleteDeviceModel/${deviceModel.deviceTypeId}/${deviceModel.deviceBrandId}/${deviceModel.deviceModelId}`);
    return dispatch({ type: "DELETE_DEVICE_MODEL", payload: { ...deviceModel } });
  };

  const values = {
    deviceDefinitions,
    addNewDeviceType,
    updateDeviceType,
    deleteDeviceType,
    addNewDeviceBrand,
    updateDeviceBrand,
    deleteDeviceBrand,
    addNewDeviceModel,
    updateDeviceModel,
    deleteDeviceModel,
  };
  return <DefinitionsContext.Provider value={values}>{children}</DefinitionsContext.Provider>;
}

export function useDefinitions() {
  return useContext(DefinitionsContext);
}
