import { createContext, useContext, useEffect, useReducer } from "react";
import { DefinitionsReducer } from "../reducer/DefinitionsReducer";
import axios from "axios";

const DefinitionsContext = createContext(null);

export function DefinitionsProvider({ children }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [deviceTypes, dispatchDeviceTypes] = useReducer(DefinitionsReducer, []);
  const [deviceBrands, dispatchDeviceBrands] = useReducer(DefinitionsReducer, []);
  const [deviceModels, dispatchDeviceModels] = useReducer(DefinitionsReducer, []);
  useEffect(() => {
    const getAllDeviceTypes = async () => {
      const response = await axios.get(`${API_URL}/api/definitions/getAllDeviceTypes`, { withCredentials: true });
      dispatchDeviceTypes({ type: "SET_DEVICE_TYPES", payload: response.data });
    };

    getAllDeviceTypes();

    getAllDeviceBrands();
  }, []);

  const addNewDeviceType = async (deviceType) => {
    const response = await axios.post(`${API_URL}/api/definitions/newDeviceType`, { deviceType }, { withCredentials: true });
    return dispatchDeviceTypes({ type: "ADD_NEW_DEVICE_TYPE", payload: response.data.deviceType });
  };

  const updateDeviceType = async (deviceTypeId, deviceType) => {
    const response = await axios.put(`${API_URL}/api/definitions/updateDeviceType/${deviceTypeId}`, { deviceType }, { withCredentials: true });
    return dispatchDeviceTypes({ type: "UPDATE_DEVICE_TYPE", payload: response.data.deviceType });
  };

  const deleteDeviceType = async (deviceTypeId) => {
    const response = await axios.delete(`${API_URL}/api/definitions/deleteDeviceType/${deviceTypeId}`);
    return dispatchDeviceTypes({ type: "DELETE_DEVICE_TYPE", payload: { deviceTypeId: deviceTypeId } });
  };

  const getAllDeviceBrands = async () => {
    const response = await axios.get(`${API_URL}/api/definitions/getAllDeviceBrands`, { withCredentials: true });
    dispatchDeviceBrands({ type: "SET_DEVICE_BRANDS", payload: response.data });
  };

  const addNewDeviceBrand = async (deviceBrand) => {
    console.log(deviceBrand);
    const response = await axios.post(`${API_URL}/api/definitions/newDeviceBrand`, { ...deviceBrand }, { withCredentials: true });
    return dispatchDeviceBrands({ type: "ADD_NEW_DEVICE_BRAND", payload: response.data.deviceBrand });
  };

  const updateDeviceBrand = async (deviceBrandId, deviceBrand) => {
    const response = await axios.put(`${API_URL}/api/definitions/updateDeviceBrand/${deviceBrandId}`, { deviceBrand }, { withCredentials: true });
    return dispatchDeviceBrands({ type: "UPDATE_DEVICE_BRAND", payload: response.data.deviceBrand });
  };

  const deleteDeviceBrand = async (deviceBrandId) => {
    const response = await axios.delete(`${API_URL}/api/definitions/deleteDeviceBrand/${deviceBrandId}`);
    return dispatchDeviceBrands({ type: "DELETE_DEVICE_BRAND", payload: { deviceBrandId: deviceBrandId } });
  };

  const getDeviceBrandsByDeviceType = async (deviceTypeId) => {
    const response = await axios.get(`${API_URL}/api/definitions/getDeviceBrandsByDeviceType/${deviceTypeId}`, { withCredentials: true });
    console.log(response.data);
    dispatchDeviceBrands({ type: "SET_DEVICE_BRANDS_BY_DEVICE_TYPE", payload: response.data.deviceBrands });
  };

  const addNewDeviceModel = async (deviceModel) => {
    console.log(deviceModel);
    const response = await axios.post(`${API_URL}/api/definitions/newDeviceModel`, { ...deviceModel }, { withCredentials: true });
    return dispatchDeviceModels({ type: "ADD_NEW_DEVICE_MODEL", payload: response.data.deviceModel });
  };

  const updateDeviceModel = async (deviceModelId, deviceModel) => {
    const response = await axios.put(`${API_URL}/api/definitions/updateDeviceModel/${deviceModelId}`, { deviceModel }, { withCredentials: true });
    return dispatchDeviceModels({ type: "UPDATE_DEVICE_MODEL", payload: response.data.deviceModel });
  };

  const deleteDeviceModel = async (deviceModelId) => {
    const response = await axios.delete(`${API_URL}/api/definitions/deleteDeviceModel/${deviceModelId}`);
    return dispatchDeviceModels({ type: "DELETE_DEVICE_MODEL", payload: { deviceModelId: deviceModelId } });
  };

  const getDeviceModelsByDeviceBrand = async (deviceBrandId) => {
    const response = await axios.get(`${API_URL}/api/definitions/getDeviceModelsByDeviceBrand/${deviceBrandId}`, { withCredentials: true });
    console.log(response.data);
    dispatchDeviceModels({ type: "SET_DEVICE_MODELS_BY_DEVICE_BRAND", payload: response.data.deviceModels });
  };

  const values = {
    deviceTypes,
    addNewDeviceType,
    updateDeviceType,
    deleteDeviceType,
    deviceBrands,
    getAllDeviceBrands,
    addNewDeviceBrand,
    updateDeviceBrand,
    deleteDeviceBrand,
    getDeviceBrandsByDeviceType,
    deviceModels,
    addNewDeviceModel,
    updateDeviceModel,
    deleteDeviceModel,
    getDeviceModelsByDeviceBrand,
  };
  return <DefinitionsContext.Provider value={values}>{children}</DefinitionsContext.Provider>;
}

export function useDefinitions() {
  return useContext(DefinitionsContext);
}
