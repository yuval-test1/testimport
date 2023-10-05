import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  id?: SortOrder;
  addressId?: SortOrder;
  createdAt?: SortOrder;
  selectedBidAt?: SortOrder;
  selectedBidId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  addressId?: SortOrder;
};
