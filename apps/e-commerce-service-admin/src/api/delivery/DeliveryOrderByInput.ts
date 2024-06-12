import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  deliveryDate?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
