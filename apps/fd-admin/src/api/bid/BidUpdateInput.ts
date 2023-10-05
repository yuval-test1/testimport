import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { LineItemUpdateManyWithoutBidsInput } from "./LineItemUpdateManyWithoutBidsInput";

export type BidUpdateInput = {
  companyId?: string;
  job?: JobWhereUniqueInput;
  quoteUrl?: string | null;
  startDate?: Date | null;
  lineItems?: LineItemUpdateManyWithoutBidsInput;
};
