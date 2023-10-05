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
import { JOB_TITLE_FIELD } from "../job/JobTitle";

export const MeasurementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Measurements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <ReferenceField label="Job" source="job.id" reference="Job">
          <TextField source={JOB_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Total" source="total" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Unit Of Measurement" source="unitOfMeasurement" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
