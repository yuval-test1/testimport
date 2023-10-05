import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ReportWhereInput = {
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  createdAt?: DateTimeFilter;
  typeField?: StringFilter;
  updatedAt?: DateTimeFilter;
  url?: StringFilter;
};
