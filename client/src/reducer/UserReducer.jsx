export function UserReducer(user, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload, isLoggedIn: true };
      break;
    case "LOGOUT":
      return { ...action.payload, isLoggedIn: false };
      break;
    default:
      break;
  }
}
