import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { BidCreateNestedManyWithoutJobsInput } from "./BidCreateNestedManyWithoutJobsInput";
import { ImageCreateNestedManyWithoutJobsInput } from "./ImageCreateNestedManyWithoutJobsInput";
import { MeasurementCreateNestedManyWithoutJobsInput } from "./MeasurementCreateNestedManyWithoutJobsInput";
import { ReportCreateNestedManyWithoutJobsInput } from "./ReportCreateNestedManyWithoutJobsInput";

export type JobCreateInput = {
  addressId?: string | null;
  selectedBidAt?: Date | null;
  selectedBidId?: string | null;
  status: string;
  userId: string;
  address?: AddressWhereUniqueInput | null;
  bids?: BidCreateNestedManyWithoutJobsInput;
  images?: ImageCreateNestedManyWithoutJobsInput;
  measurements?: MeasurementCreateNestedManyWithoutJobsInput;
  reports?: ReportCreateNestedManyWithoutJobsInput;
};
