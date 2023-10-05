import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  id?: SortOrder;
  jobId?: SortOrder;
  city?: SortOrder;
  county?: SortOrder;
  state?: SortOrder;
  street1?: SortOrder;
  street2?: SortOrder;
  zipCode?: SortOrder;
};
