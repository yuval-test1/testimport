import { StringFilter } from "../../util/StringFilter";
import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CityWhereInput = {
  id?: StringFilter;
  market?: MarketWhereUniqueInput;
  createdAt?: DateTimeFilter;
  name?: StringFilter;
  roofingMaterialIds?: StringFilter;
  state?: StringNullableFilter;
  status?: StringFilter;
  updatedAt?: DateTimeFilter;
};
