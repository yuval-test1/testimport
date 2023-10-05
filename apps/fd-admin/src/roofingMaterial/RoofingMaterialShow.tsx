import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ROOFINGMATERIAL_TITLE_FIELD } from "./RoofingMaterialTitle";

export const RoofingMaterialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Manufacturer" source="manufacturer" />
        <TextField label="Max Lifespan" source="maxLifespan" />
        <TextField label="Min Lifespan" source="minLifespan" />
        <TextField label="Name" source="name" />
        <TextField label="Status" source="status" />
        <TextField label="Supplier" source="supplier" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Color"
          target="roofingMaterialId"
          label="Colors"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
