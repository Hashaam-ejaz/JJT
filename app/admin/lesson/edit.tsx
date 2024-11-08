import {
  Edit,
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" label="Title" validate={[required()]} />
        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" validate={[required()]} label={"Order"} />
      </SimpleForm>
    </Edit>
  );
};
