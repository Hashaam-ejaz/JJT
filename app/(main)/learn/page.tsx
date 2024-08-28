import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const Learn = () => {
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
        <div className="space-y-4">
          <div className="h-[200px] bg-black" />
          <div className="h-[200px] bg-black" />
          <div className="h-[200px] bg-black" />
          <div className="h-[200px] bg-black" />
          <div className="h-[200px] bg-black" />
          <div className="h-[200px] bg-black" />
          <div className="h -[200px] bg-black" />
          <div className="h-[200px] bg-black" />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default Learn;
