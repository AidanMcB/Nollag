import { Gift } from "./gift.interface";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gifts?: Gift[];
}

export interface UserPageComponentState {
  user: User;
  myPage: boolean;
  errorMessage: string;
  gifts?: Gift[];
}
