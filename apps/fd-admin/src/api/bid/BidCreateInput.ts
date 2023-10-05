import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { LineItemCreateNestedManyWithoutBidsInput } from "./LineItemCreateNestedManyWithoutBidsInput";

export type BidCreateInput = {
  companyId: string;
  job: JobWhereUniqueInput;
  quoteUrl?: string | null;
  startDate?: Date | null;
  lineItems?: LineItemCreateNestedManyWithoutBidsInput;
};
