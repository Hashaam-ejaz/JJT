import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
  SelectField,
  TextInput,
} from "react-admin";

export const ChallengeList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="question" />
        <SelectField
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
            {
              id: "READ",
              name: "READ",
            },
          ]}
        />
        <ReferenceField source="lessonId" reference="lessons" />
        {/* Remove these two otherwise unknown error in react admin controller forms */}
        {/* <TextInput source="imageSrc" label="Image URL" defaultValue="" /> */}
        {/* <TextInput source="audioSrc" label="Audio URL" defaultValue="" /> */}
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
