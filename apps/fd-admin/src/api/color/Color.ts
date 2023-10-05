import { RoofingMaterial } from "../roofingMaterial/RoofingMaterial";

export type Color = {
  id: string;
  roofingMaterial?: RoofingMaterial;
  color: string;
  createdAt: Date;
  pictureUrl: string | null;
  status: string;
  updatedAt: Date;
};
