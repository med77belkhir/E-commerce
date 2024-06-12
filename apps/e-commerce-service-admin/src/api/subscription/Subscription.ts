import { Customer } from "../customer/Customer";

export type Subscription = {
  active: boolean | null;
  createdAt: Date;
  customer?: Customer | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
};
