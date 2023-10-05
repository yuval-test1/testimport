import { OfficeLocation } from "../officeLocation/OfficeLocation";

export type Pricing = {
  id: string;
  officeLocation?: OfficeLocation;
  createdAt: Date;
  price: number;
  roofingMaterialId: string;
  status: string;
  typeField: string;
  updatedAt: Date;
};
