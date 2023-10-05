import { SortOrder } from "../../util/SortOrder";

export type BidOrderByInput = {
  id?: SortOrder;
  companyId?: SortOrder;
  createdAt?: SortOrder;
  jobId?: SortOrder;
  quoteUrl?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
