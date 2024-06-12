import { DeliveryCreateNestedManyWithoutOrdersInput } from "./DeliveryCreateNestedManyWithoutOrdersInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  deliveries?: DeliveryCreateNestedManyWithoutOrdersInput;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
};
