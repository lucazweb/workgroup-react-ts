export interface User {
  name: string;
  id: string;
  avatar: string;
  email: string;
}

export interface IUserState {
  users: User[];
}

export interface IUserAction {
  type: string;
  payload: any;
}

export type IUserContext = {
  state: IUserState;
  dispatch: (action: IUserAction) => void;
};
