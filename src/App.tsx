import React, { useReducer, useContext } from "react";
import Router from "./components/Router";
import { UserContext } from "./data/users/context";
import UserReducer from "./data/users/reducer";

function App() {
  const { state: initialState } = useContext(UserContext);
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router />
    </UserContext.Provider>
  );
}
export default App;
