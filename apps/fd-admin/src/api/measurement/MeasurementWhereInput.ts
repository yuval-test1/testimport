import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type MeasurementWhereInput = {
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  createdAt?: DateTimeFilter;
  total?: FloatFilter;
  typeField?: StringFilter;
  unitOfMeasurement?: StringFilter;
  updatedAt?: DateTimeFilter;
};
