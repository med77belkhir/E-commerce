import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type SubscriptionUpdateInput = {
  active?: boolean | null;
  customer?: CustomerWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
};
