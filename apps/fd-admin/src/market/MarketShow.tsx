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

import { MARKET_TITLE_FIELD } from "./MarketTitle";

export const MarketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Name" source="name" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="City" target="marketId" label="Cities">
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Market"
              source="market.id"
              reference="Market"
            >
              <TextField source={MARKET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Name" source="name" />
            <TextField
              label="Roofing Material Ids"
              source="roofingMaterialIds"
            />
            <TextField label="State" source="state" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
