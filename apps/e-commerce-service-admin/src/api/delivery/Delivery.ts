import { Order } from "../order/Order";

export type Delivery = {
  address: string | null;
  createdAt: Date;
  deliveryDate: Date | null;
  id: string;
  order?: Order | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
