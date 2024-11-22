import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />

        <ReferenceField source="unitId" reference="units" />
        <ReferenceField
          source="unitId"
          reference="units"
          link={false}
          label="Course"
        >
          <ReferenceField source="courseId" reference="courses">
            <TextField source="title" />
          </ReferenceField>
        </ReferenceField>
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
