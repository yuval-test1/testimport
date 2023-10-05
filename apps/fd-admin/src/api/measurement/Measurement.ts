import { Job } from "../job/Job";

export type Measurement = {
  id: string;
  job?: Job;
  createdAt: Date;
  total: number;
  typeField: string;
  unitOfMeasurement: string;
  updatedAt: Date;
};
