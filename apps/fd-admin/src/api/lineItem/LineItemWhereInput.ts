import { StringFilter } from "../../util/StringFilter";
import { BidWhereUniqueInput } from "../bid/BidWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type LineItemWhereInput = {
  id?: StringFilter;
  bid?: BidWhereUniqueInput;
  createdAt?: DateTimeFilter;
  details?: StringFilter;
  price?: FloatFilter;
  roofingTypeId?: StringFilter;
  updatedAt?: DateTimeFilter;
  wasteFactor?: FloatFilter;
};
