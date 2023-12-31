import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RoofingMaterialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RoofingMaterials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
