import { BehaviorSubject } from "rxjs";
import { UserPageComponentState } from "./user.interface";

//from library

export const SetState = <T>(multicast$: BehaviorSubject<T>, updateObject: Partial<T>): void => {
  const nextState = Object.assign(<T>{}, multicast$.getValue(), updateObject);
  multicast$.next(nextState);
}

export const GetState = <T, K extends keyof T>(multicast$: BehaviorSubject<T>, key: K): T[K] => {
  const value = multicast$.getValue();
  return value ? value[key] : null;
}

export const UserPageDefaultState: UserPageComponentState = {
  user: null,
  myPage: false,
  errorMessage: '',
  gifts: []
}
