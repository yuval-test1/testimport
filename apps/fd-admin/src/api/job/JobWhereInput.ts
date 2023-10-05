import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { BidListRelationFilter } from "../bid/BidListRelationFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { MeasurementListRelationFilter } from "../measurement/MeasurementListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type JobWhereInput = {
  id?: StringFilter;
  addressId?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  selectedBidAt?: DateTimeNullableFilter;
  selectedBidId?: StringNullableFilter;
  status?: StringFilter;
  updatedAt?: DateTimeFilter;
  userId?: StringFilter;
  address?: AddressWhereUniqueInput;
  bids?: BidListRelationFilter;
  images?: ImageListRelationFilter;
  measurements?: MeasurementListRelationFilter;
  reports?: ReportListRelationFilter;
};
