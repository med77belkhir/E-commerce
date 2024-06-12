import { Delivery } from "../delivery/Delivery";
import { Payment } from "../payment/Payment";

export type Order = {
  createdAt: Date;
  deliveries?: Array<Delivery>;
  id: string;
  payments?: Array<Payment>;
  updatedAt: Date;
};
