import { IUserState, IUserAction } from "./types";

export default function UserReducer(state: IUserState, action: IUserAction) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
