import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AnalyticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="likes" source="likes" />
        <TextInput label="postId" source="postId" />
        <NumberInput step={1} label="shares" source="shares" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput step={1} label="views" source="views" />
      </SimpleForm>
    </Create>
  );
};
