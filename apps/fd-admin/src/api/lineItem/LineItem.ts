import { Bid } from "../bid/Bid";

export type LineItem = {
  id: string;
  bid?: Bid;
  createdAt: Date;
  details: string;
  price: number;
  roofingTypeId: string;
  updatedAt: Date;
  wasteFactor: number;
};
