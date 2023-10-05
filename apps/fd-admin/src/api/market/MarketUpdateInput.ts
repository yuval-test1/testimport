import { CityUpdateManyWithoutMarketsInput } from "./CityUpdateManyWithoutMarketsInput";

export type MarketUpdateInput = {
  name?: string;
  status?: string;
  cities?: CityUpdateManyWithoutMarketsInput;
};
