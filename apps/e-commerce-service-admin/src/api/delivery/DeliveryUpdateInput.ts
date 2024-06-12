import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryUpdateInput = {
  address?: string | null;
  deliveryDate?: Date | null;
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
