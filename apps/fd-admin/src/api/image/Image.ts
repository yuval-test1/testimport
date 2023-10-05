import { Job } from "../job/Job";

export type Image = {
  id: string;
  job?: Job;
  createdAt: Date;
  typeField: string;
  updatedAt: Date;
  url: string;
};
