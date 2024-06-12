import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
