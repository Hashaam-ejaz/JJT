import { getCourses } from "@/database/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const data = await getCourses();

  return (
    <div className="mx-auto h-full max-w-[912px] px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Courses</h1>
      {/* {JSON.stringify(data)} */}
      <List courses={data} activeCourseId={1} />
    </div>
  );
};

export default CoursesPage;
