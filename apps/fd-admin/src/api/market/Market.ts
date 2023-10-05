import { City } from "../city/City";

export type Market = {
  id: string;
  createdAt: Date;
  name: string;
  status: string;
  updatedAt: Date;
  cities?: Array<City>;
};
