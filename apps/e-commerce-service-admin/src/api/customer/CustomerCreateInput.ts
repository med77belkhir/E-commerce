import { SubscriptionCreateNestedManyWithoutCustomersInput } from "./SubscriptionCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  role?: "Option1" | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutCustomersInput;
};
