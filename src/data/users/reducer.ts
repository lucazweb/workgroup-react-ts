import { IUserState, IUserAction } from "./types";

export default function UserReducer(state: IUserState, action: IUserAction) {
  switch (action.type) {
    default:
      return state;
  }
}
