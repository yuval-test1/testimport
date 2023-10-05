import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LineItemListRelationFilter } from "../lineItem/LineItemListRelationFilter";

export type BidWhereInput = {
  id?: StringFilter;
  companyId?: StringFilter;
  createdAt?: DateTimeFilter;
  job?: JobWhereUniqueInput;
  quoteUrl?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  updatedAt?: DateTimeFilter;
  lineItems?: LineItemListRelationFilter;
};
