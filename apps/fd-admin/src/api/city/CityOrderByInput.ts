import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  id?: SortOrder;
  marketId?: SortOrder;
  createdAt?: SortOrder;
  name?: SortOrder;
  roofingMaterialIds?: SortOrder;
  state?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
