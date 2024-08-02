export function DefinitionsReducer(state, action) {
  switch (action.type) {
    case "SET_DEVICE_TYPES":
      return [...action.payload];
    case "ADD_NEW_DEVICE_TYPE":
      return [...state, action.payload];
    case "UPDATE_DEVICE_TYPE":
      console.log(action.payload);
      return state.map((deviceType) => {
        if (action.payload._id === deviceType._id) {
          return action.payload;
        } else {
          return deviceType;
        }
      });
    case "DELETE_DEVICE_TYPE":
      console.log(state);
      return state.filter((deviceType) => deviceType._id !== action.payload.deviceTypeId);
    case "SET_DEVICE_BRANDS":
      return [...action.payload];
    case "ADD_NEW_DEVICE_BRAND":
      return [...state, action.payload];
    case "SET_DEVICE_BRANDS_BY_DEVICE_TYPE":
      return [...action.payload];
    case "UPDATE_DEVICE_BRAND":
      console.log(action.payload);
      return state.map((deviceBrand) => {
        if (action.payload._id === deviceBrand._id) {
          return action.payload;
        } else {
          return deviceBrand;
        }
      });
    case "DELETE_DEVICE_BRAND":
      console.log(state);
      return state.filter((deviceBrand) => deviceBrand._id !== action.payload.deviceBrandId);
    case "ADD_NEW_DEVICE_MODEL":
      return [...state, action.payload];
    case "UPDATE_DEVICE_MODEL":
      console.log(action.payload);
      return state.map((deviceModel) => {
        if (action.payload._id === deviceModel._id) {
          return action.payload;
        } else {
          return deviceModel;
        }
      });
    case "DELETE_DEVICE_MODEL":
      console.log(state);
      return state.filter((deviceModel) => deviceModel._id !== action.payload.deviceModelId);
    case "SET_DEVICE_MODELS_BY_DEVICE_BRAND":
      return [...action.payload];
  }
}
