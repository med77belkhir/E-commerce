import { SubscriptionUpdateManyWithoutCustomersInput } from "./SubscriptionUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  role?: "Option1" | null;
  subscriptions?: SubscriptionUpdateManyWithoutCustomersInput;
};
