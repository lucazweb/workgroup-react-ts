import React, { useReducer, useContext, useEffect } from "react";
import { UserCardBox } from "./components/UserCard/users-box.component";
import { UserContext } from "./data/users/context";
import UserReducer from "./data/users/reducer";

function App() {
  const { state: initialState } = useContext(UserContext);
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="grid grid-cols-1 self-center justify-items-center border border-b-2 border-gray-600 bg-gray-600 ">
        <h1 className="text-1xl text-white">Workgroup app</h1>
      </div>
      <UserCardBox />
    </UserContext.Provider>
  );
}
export default App;
