import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { BidUpdateManyWithoutJobsInput } from "./BidUpdateManyWithoutJobsInput";
import { ImageUpdateManyWithoutJobsInput } from "./ImageUpdateManyWithoutJobsInput";
import { MeasurementUpdateManyWithoutJobsInput } from "./MeasurementUpdateManyWithoutJobsInput";
import { ReportUpdateManyWithoutJobsInput } from "./ReportUpdateManyWithoutJobsInput";

export type JobUpdateInput = {
  addressId?: string | null;
  selectedBidAt?: Date | null;
  selectedBidId?: string | null;
  status?: string;
  userId?: string;
  address?: AddressWhereUniqueInput | null;
  bids?: BidUpdateManyWithoutJobsInput;
  images?: ImageUpdateManyWithoutJobsInput;
  measurements?: MeasurementUpdateManyWithoutJobsInput;
  reports?: ReportUpdateManyWithoutJobsInput;
};
