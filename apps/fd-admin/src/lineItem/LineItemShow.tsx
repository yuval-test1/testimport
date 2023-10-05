import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { BID_TITLE_FIELD } from "../bid/BidTitle";

export const LineItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <ReferenceField label="Bid" source="bid.id" reference="Bid">
          <TextField source={BID_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Details" source="details" />
        <TextField label="Price" source="price" />
        <TextField label="Roofing Type Id" source="roofingTypeId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Waste Factor" source="wasteFactor" />
      </SimpleShowLayout>
    </Show>
  );
};
