import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CityListRelationFilter } from "../city/CityListRelationFilter";

export type MarketWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  name?: StringFilter;
  status?: StringFilter;
  updatedAt?: DateTimeFilter;
  cities?: CityListRelationFilter;
};
