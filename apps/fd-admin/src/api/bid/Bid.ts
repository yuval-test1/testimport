import { Job } from "../job/Job";
import { LineItem } from "../lineItem/LineItem";

export type Bid = {
  id: string;
  companyId: string;
  createdAt: Date;
  job?: Job;
  quoteUrl: string | null;
  startDate: Date | null;
  updatedAt: Date;
  lineItems?: Array<LineItem>;
};
