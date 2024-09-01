export function DefinitionsReducer(state, action) {
  switch (action.type) {
    case "GET_ALL_DEVICE_DEFINITIONS":
      return [...action.payload];
    case "ADDED_NEW_DEFINITION":
      return state.map((def) => {
        if (def._id === action.payload._id) {
          return action.payload;
        }
        return def;
      });
    case "ADD_NEW_DEVICE_TYPE":
      return [...state, action.payload];
    case "UPDATE_DEVICE_TYPE":
      return state.map((deviceType) => {
        if (action.payload._id === deviceType._id) {
          return action.payload;
        } else {
          return deviceType;
        }
      });
    case "DELETE_DEVICE_TYPE":
      return state.filter((deviceType) => deviceType._id !== action.payload.deviceTypeId);
    case "SET_DEVICE_BRANDS":
      return [...action.payload];
    case "ADD_NEW_DEVICE_BRAND":
      return [...state, action.payload];
    case "SET_DEVICE_BRANDS_BY_DEVICE_TYPE":
      return state;
    case "UPDATE_DEVICE_BRAND":
      return state.map((deviceType) => {
        if (action.payload._id === deviceType._id) {
          return action.payload;
        } else {
          return deviceType;
        }
      });
    case "DELETE_DEVICE_BRAND":
      state = state.map((deviceType) => {
        if (deviceType._id === action.payload.deviceTypeId) {
          const newDeviceBrands = deviceType.deviceBrands.filter((deviceBrand) => {
            if (deviceBrand._id !== action.payload.deviceBrandId) {
              return deviceBrand;
            }
          });
          deviceType.deviceBrands = newDeviceBrands;
          return deviceType;
        } else {
          return deviceType;
        }
      });
      return state;

    case "ADD_NEW_DEVICE_MODEL":
      return [...state, action.payload];
    case "UPDATE_DEVICE_MODEL":
      return state.map((deviceModel) => {
        if (action.payload._id === deviceModel._id) {
          return action.payload;
        } else {
          return deviceModel;
        }
      });
    case "DELETE_DEVICE_MODEL":
      state = state.map((deviceType) => {
        if (deviceType._id === action.payload.deviceTypeId) {
          deviceType.deviceBrands.map((deviceBrand) => {
            if (deviceBrand._id === action.payload.deviceBrandId) {
              const newDeviceModels = deviceBrand.deviceModels.filter((deviceModel) => {
                return deviceModel._id !== action.payload.deviceModelId;
              });
              deviceBrand.deviceModels = newDeviceModels;
              return deviceBrand;
            } else {
              return deviceBrand;
            }
          });
          return deviceType;
        } else {
          return deviceType;
        }
      });

      return state;
    case "SET_DEVICE_MODELS_BY_DEVICE_BRAND":
      return [...action.payload];
  }
}
