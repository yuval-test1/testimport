import { Color } from "../color/Color";

export type RoofingMaterial = {
  id: string;
  createdAt: Date;
  description: string | null;
  manufacturer: string;
  maxLifespan: number;
  minLifespan: number;
  name: string;
  status: string;
  supplier: string;
  updatedAt: Date;
  colors?: Array<Color>;
};
