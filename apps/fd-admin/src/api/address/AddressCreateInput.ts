import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type AddressCreateInput = {
  job: JobWhereUniqueInput;
  city?: string | null;
  county?: string | null;
  state?: string | null;
  street1?: string | null;
  street2?: string | null;
  zipCode?: string | null;
};
