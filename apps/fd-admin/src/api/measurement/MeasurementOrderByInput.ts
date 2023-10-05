import { SortOrder } from "../../util/SortOrder";

export type MeasurementOrderByInput = {
  id?: SortOrder;
  jobId?: SortOrder;
  createdAt?: SortOrder;
  total?: SortOrder;
  typeField?: SortOrder;
  unitOfMeasurement?: SortOrder;
  updatedAt?: SortOrder;
};
