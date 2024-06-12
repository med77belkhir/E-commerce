import { Subscription } from "../subscription/Subscription";

export type Customer = {
  createdAt: Date;
  id: string;
  role?: "Option1" | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
