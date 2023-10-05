import { StringFilter } from "../../util/StringFilter";
import { OfficeLocationWhereUniqueInput } from "../officeLocation/OfficeLocationWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type PricingWhereInput = {
  id?: StringFilter;
  officeLocation?: OfficeLocationWhereUniqueInput;
  createdAt?: DateTimeFilter;
  price?: FloatFilter;
  roofingMaterialId?: StringFilter;
  status?: StringFilter;
  typeField?: StringFilter;
  updatedAt?: DateTimeFilter;
};
