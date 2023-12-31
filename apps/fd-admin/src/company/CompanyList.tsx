import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CompanyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Companies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Email" source="email" />
        <TextField label="Founding Year" source="foundingYear" />
        <TextField label="Logo" source="logo" />
        <TextField label="Logo Status" source="logoStatus" />
        <TextField label="Name" source="name" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="State" source="state" />
        <TextField label="Status" source="status" />
        <TextField label="Street1" source="street1" />
        <TextField label="Street2" source="street2" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zip Code" source="zipCode" />
      </Datagrid>
    </List>
  );
};
