import React from "react";
import { IUserContext } from "./types";
export const UserContext = React.createContext<IUserContext>({
  state: {
    users: [],
  },
  dispatch: () => null,
});
