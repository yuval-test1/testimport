import { Job } from "../job/Job";

export type Report = {
  id: string;
  job?: Job;
  createdAt: Date;
  typeField: string;
  updatedAt: Date;
  url: string;
};
