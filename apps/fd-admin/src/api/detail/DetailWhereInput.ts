import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type DetailWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  price?: FloatFilter;
  typeField?: StringFilter;
  updatedAt?: DateTimeFilter;
};
