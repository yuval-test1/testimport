import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OfficeLocationTitle } from "../officeLocation/OfficeLocationTitle";

export const CompanyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Description" source="description" />
        <TextInput label="Email" source="email" />
        <NumberInput step={1} label="Founding Year" source="foundingYear" />
        <TextInput label="Logo" source="logo" />
        <TextInput label="Logo Status" source="logoStatus" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <TextInput label="State" source="state" />
        <TextInput label="Status" source="status" />
        <TextInput label="Street1" source="street1" />
        <TextInput label="Street2" source="street2" />
        <TextInput label="Zip Code" source="zipCode" />
        <ReferenceArrayInput
          source="officeLocations"
          reference="OfficeLocation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OfficeLocationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
