import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { ColorListRelationFilter } from "../color/ColorListRelationFilter";

export type RoofingMaterialWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  manufacturer?: StringFilter;
  maxLifespan?: FloatFilter;
  minLifespan?: FloatFilter;
  name?: StringFilter;
  status?: StringFilter;
  supplier?: StringFilter;
  updatedAt?: DateTimeFilter;
  colors?: ColorListRelationFilter;
};
