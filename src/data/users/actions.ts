import { api } from "../../services/users";
import { User } from "./types";

export const getUsers = async (callbackDispatch: (data: User[]) => void) => {
  try {
    const { data } = await api.get("/users");
    callbackDispatch(data);
  } catch (err) {
    // call callback passing error
    console.log(err);
  }
};
