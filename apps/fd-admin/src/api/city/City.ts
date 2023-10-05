import { Market } from "../market/Market";

export type City = {
  id: string;
  market?: Market;
  createdAt: Date;
  name: string;
  roofingMaterialIds: string;
  state: string | null;
  status: string;
  updatedAt: Date;
};
