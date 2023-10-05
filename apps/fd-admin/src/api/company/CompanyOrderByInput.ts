import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  id?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  email?: SortOrder;
  foundingYear?: SortOrder;
  logo?: SortOrder;
  logoStatus?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  state?: SortOrder;
  status?: SortOrder;
  street1?: SortOrder;
  street2?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};
