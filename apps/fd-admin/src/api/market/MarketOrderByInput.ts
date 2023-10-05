import { SortOrder } from "../../util/SortOrder";

export type MarketOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
