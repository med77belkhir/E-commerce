import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryCreateInput = {
  address?: string | null;
  deliveryDate?: Date | null;
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
