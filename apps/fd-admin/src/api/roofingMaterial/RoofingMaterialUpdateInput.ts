import { ColorUpdateManyWithoutRoofingMaterialsInput } from "./ColorUpdateManyWithoutRoofingMaterialsInput";

export type RoofingMaterialUpdateInput = {
  description?: string | null;
  manufacturer?: string;
  maxLifespan?: number;
  minLifespan?: number;
  name?: string;
  status?: string;
  supplier?: string;
  colors?: ColorUpdateManyWithoutRoofingMaterialsInput;
};
