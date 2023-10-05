import { RoofingMaterialWhereUniqueInput } from "../roofingMaterial/RoofingMaterialWhereUniqueInput";

export type ColorUpdateInput = {
  roofingMaterial?: RoofingMaterialWhereUniqueInput;
  color?: string;
  pictureUrl?: string | null;
  status?: string;
};
