export function UserReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload };
    case "LOGOUT":
      return { username: null };
    default:
      return state;
  }
}
