import { Job } from "../job/Job";

export type Address = {
  id: string;
  job?: Job;
  city: string | null;
  county: string | null;
  state: string | null;
  street1: string | null;
  street2: string | null;
  zipCode: string | null;
};
