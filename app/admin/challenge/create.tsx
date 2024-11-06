import {
  Create,
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ChallengeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="question" label="Question" validate={[required()]} />
        <SelectInput
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
          validate={[required()]}
        />
        <ReferenceInput source="lessonId" reference="lessons" />
        <TextInput source="imageSrc" label="Image URL" defaultValue="" />
        <TextInput source="audioSrc" label="Audio URL" defaultValue="" />
        <NumberInput source="order" validate={[required()]} label={"Order"} />
      </SimpleForm>
    </Create>
  );
};
