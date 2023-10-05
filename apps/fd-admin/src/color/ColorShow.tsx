import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { ROOFINGMATERIAL_TITLE_FIELD } from "../roofingMaterial/RoofingMaterialTitle";

export const ColorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Roofing Material"
          source="roofingmaterial.id"
          reference="RoofingMaterial"
        >
          <TextField source={ROOFINGMATERIAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Picture Url" source="pictureUrl" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
