import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="likes" source="likes" />
        <TextInput label="postId" source="postId" />
        <NumberInput step={1} label="shares" source="shares" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="views" source="views" />
      </SimpleForm>
    </Edit>
  );
};
