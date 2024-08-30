import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/database/queries";
import { redirect } from "next/navigation";

const Learn = async () => {
  const userProgressPromise = getUserProgress();
  const [userProgress] = await Promise.all([userProgressPromise]);
  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "English", imgSrc: "/englishUK.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="English" />
      </FeedWrapper>
    </div>
  );
};

export default Learn;
