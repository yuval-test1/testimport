import { ColorCreateNestedManyWithoutRoofingMaterialsInput } from "./ColorCreateNestedManyWithoutRoofingMaterialsInput";

export type RoofingMaterialCreateInput = {
  description?: string | null;
  manufacturer: string;
  maxLifespan: number;
  minLifespan: number;
  name: string;
  status: string;
  supplier: string;
  colors?: ColorCreateNestedManyWithoutRoofingMaterialsInput;
};
