import {
  Edit,
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

export const UnitEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" label="Id" validate={[required()]} />
        <TextInput source="title" label="Title" validate={[required()]} />
        <TextInput
          source="description"
          label="Description"
          validate={[required()]}
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" validate={[required()]} label={"Order"} />
      </SimpleForm>
    </Edit>
  );
};
