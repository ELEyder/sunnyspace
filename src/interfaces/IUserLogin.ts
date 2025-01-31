import { IUser } from "./IUser";

export interface IUserLogin {
  username: string;
  firstName: string;
  lastName: string;
  status: string;
  email: string;
  urlAvatar: string;
  friends: IUser[];
}
