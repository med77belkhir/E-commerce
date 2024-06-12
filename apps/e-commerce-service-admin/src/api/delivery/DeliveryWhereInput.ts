import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryWhereInput = {
  address?: StringNullableFilter;
  deliveryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  status?: "Option1";
};
