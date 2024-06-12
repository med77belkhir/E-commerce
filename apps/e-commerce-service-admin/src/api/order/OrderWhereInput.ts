import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type OrderWhereInput = {
  deliveries?: DeliveryListRelationFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
};
