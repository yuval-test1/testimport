import { Address } from "../address/Address";
import { Bid } from "../bid/Bid";
import { Image } from "../image/Image";
import { Measurement } from "../measurement/Measurement";
import { Report } from "../report/Report";

export type Job = {
  id: string;
  addressId: string | null;
  createdAt: Date;
  selectedBidAt: Date | null;
  selectedBidId: string | null;
  status: string;
  updatedAt: Date;
  userId: string;
  address?: Address | null;
  bids?: Array<Bid>;
  images?: Array<Image>;
  measurements?: Array<Measurement>;
  reports?: Array<Report>;
};
