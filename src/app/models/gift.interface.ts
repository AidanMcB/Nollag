import { User } from "./user.interface";

export interface Gift {
  name: string;
  requestedByUserId: string;
  requestedByUser: User;
  isPurchased: boolean;
  purchasedByUser?: User
  price?: number;
  notes?: string;
}
