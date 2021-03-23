import React from "react";
import { IUserContext } from "./types";
console.log("hi");
export const UserContext = React.createContext<IUserContext>({
  state: {
    users: [],
  },
  dispatch: () => null,
});
