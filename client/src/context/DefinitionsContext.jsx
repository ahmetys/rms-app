import { createContext, useContext, useEffect, useReducer } from "react";
import { DefinitionsReducer } from "../reducer/DefinitionsReducer";
import axios from "axios";

const DefinitionsContext = createContext(null);

export function DefinitionsProvider({ children }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [deviceTypes, dispatchDeviceTypes] = useReducer(DefinitionsReducer, []);
  useEffect(() => {
    const getAllDeviceTypes = async () => {
      const response = await axios.get(`${API_URL}/api/definitions/getAllDeviceTypes`, { withCredentials: true });
      dispatchDeviceTypes({ type: "SET_DEVICE_TYPES", payload: response.data });
    };
    getAllDeviceTypes();
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

  const values = { deviceTypes, addNewDeviceType, updateDeviceType, deleteDeviceType };
  return <DefinitionsContext.Provider value={values}>{children}</DefinitionsContext.Provider>;
}

export function useDefinitions() {
  return useContext(DefinitionsContext);
}
