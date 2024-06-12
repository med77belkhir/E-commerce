import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type SubscriptionCreateInput = {
  active?: boolean | null;
  customer?: CustomerWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
};
