import { createContext, useContext, useReducer } from "react";
import { UserReducer } from "../reducer/UserReducer";
const UserContext = createContext(null);
const UserDispatchContext = createContext(null);
const initialState = { username: "testuser" };

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}
