import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ROOFINGMATERIAL_TITLE_FIELD } from "../roofingMaterial/RoofingMaterialTitle";

export const ColorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Colors"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
