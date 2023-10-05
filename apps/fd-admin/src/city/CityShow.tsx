import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { MARKET_TITLE_FIELD } from "../market/MarketTitle";

export const CityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <ReferenceField label="Market" source="market.id" reference="Market">
          <TextField source={MARKET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Name" source="name" />
        <TextField label="Roofing Material Ids" source="roofingMaterialIds" />
        <TextField label="State" source="state" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
