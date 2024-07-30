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
  }
}
