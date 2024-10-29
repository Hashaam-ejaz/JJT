import { Edit, SimpleForm, required, TextInput } from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="ID" validate={[required()]} />
        <TextInput source="title" label="Title" validate={[required()]} />
        <TextInput source="imageSrc" label="Image" validate={[required()]} />
      </SimpleForm>
    </Edit>
  );
};
