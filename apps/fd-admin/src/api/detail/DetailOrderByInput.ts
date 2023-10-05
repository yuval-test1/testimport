import { SortOrder } from "../../util/SortOrder";

export type DetailOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  price?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
