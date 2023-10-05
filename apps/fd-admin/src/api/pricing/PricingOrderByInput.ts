import { SortOrder } from "../../util/SortOrder";

export type PricingOrderByInput = {
  id?: SortOrder;
  officeLocationId?: SortOrder;
  createdAt?: SortOrder;
  price?: SortOrder;
  roofingMaterialId?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
