import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { RoofingMaterialTitle } from "../roofingMaterial/RoofingMaterialTitle";

export const ColorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="roofingMaterial.id"
          reference="RoofingMaterial"
          label="Roofing Material"
        >
          <SelectInput optionText={RoofingMaterialTitle} />
        </ReferenceInput>
        <TextInput label="Color" source="color" />
        <TextInput label="Picture Url" source="pictureUrl" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
