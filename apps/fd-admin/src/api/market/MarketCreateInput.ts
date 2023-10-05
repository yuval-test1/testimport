import { CityCreateNestedManyWithoutMarketsInput } from "./CityCreateNestedManyWithoutMarketsInput";

export type MarketCreateInput = {
  name: string;
  status: string;
  cities?: CityCreateNestedManyWithoutMarketsInput;
};
