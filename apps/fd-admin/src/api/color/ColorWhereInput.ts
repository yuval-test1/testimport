import { StringFilter } from "../../util/StringFilter";
import { RoofingMaterialWhereUniqueInput } from "../roofingMaterial/RoofingMaterialWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ColorWhereInput = {
  id?: StringFilter;
  roofingMaterial?: RoofingMaterialWhereUniqueInput;
  color?: StringFilter;
  createdAt?: DateTimeFilter;
  pictureUrl?: StringNullableFilter;
  status?: StringFilter;
  updatedAt?: DateTimeFilter;
};
