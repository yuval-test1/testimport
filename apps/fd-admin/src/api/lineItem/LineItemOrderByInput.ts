import { SortOrder } from "../../util/SortOrder";

export type LineItemOrderByInput = {
  id?: SortOrder;
  bidId?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  price?: SortOrder;
  roofingTypeId?: SortOrder;
  updatedAt?: SortOrder;
  wasteFactor?: SortOrder;
};
