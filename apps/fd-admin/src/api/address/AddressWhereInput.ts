import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AddressWhereInput = {
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  city?: StringNullableFilter;
  county?: StringNullableFilter;
  state?: StringNullableFilter;
  street1?: StringNullableFilter;
  street2?: StringNullableFilter;
  zipCode?: StringNullableFilter;
};
