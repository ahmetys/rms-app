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
    case "ADD_NEW_DEVICE_BRAND":
      return [...state, action.payload];
    case "SET_DEVICE_BRANDS_BY_DEVICE_ID":
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
  }
}
