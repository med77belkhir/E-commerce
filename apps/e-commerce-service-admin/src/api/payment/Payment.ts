import { Order } from "../order/Order";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  method?: "Option1" | null;
  order?: Order | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
