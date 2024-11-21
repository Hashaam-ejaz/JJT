import {
  Create,
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const LessonCreate = () => {
  const UnitWithCourseInput = (props: any) => {
    const { data } = props;
    return (
      <SelectInput
        {...props}
        optionText={(choice) =>
          choice && choice.title
            ? `${choice.title} (Course: ${choice.course?.title || "N/A"})`
            : ""
        }
      />
    );
  };

  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="Title" validate={[required()]} />
        <ReferenceInput source="unitId" reference="units">
          <UnitWithCourseInput />
        </ReferenceInput>
        <NumberInput source="order" validate={[required()]} label={"Order"} />
      </SimpleForm>
    </Create>
  );
};
