import { RoofingMaterialWhereUniqueInput } from "../roofingMaterial/RoofingMaterialWhereUniqueInput";

export type ColorCreateInput = {
  roofingMaterial: RoofingMaterialWhereUniqueInput;
  color: string;
  pictureUrl?: string | null;
  status: string;
};
