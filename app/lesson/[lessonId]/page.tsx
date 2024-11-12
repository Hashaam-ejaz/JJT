import { getLesson, getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";
import { Quiz } from "../quiz";

type props = {
  params: {
    lessonId: number;
  };
};

const LessonIdPage = async ({ params }: props) => {
  const lessonId = Number(params.lessonId);

  const lessonData = getLesson(lessonId);
  const userProgressData = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
    return null;
  }

  const initialPercentage =
    (lesson.challenges.filter((challege) => challege.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
    />
  );
};

export default LessonIdPage;
