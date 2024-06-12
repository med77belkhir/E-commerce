import { StringFilter } from "../../util/StringFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  role?: "Option1";
  subscriptions?: SubscriptionListRelationFilter;
};
