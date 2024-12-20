"use client";
import Confetti from "react-confetti";
import Image from "next/image";
import { challengeOptions, challenges } from "@/database/schema";
import { useState, useTransition } from "react";
import { useAudio, useWindowSize, useMount } from "react-use";
import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { toast } from "sonner";
import { reduceHearts } from "@/actions/user-progress";
import { ResultCard } from "./result-card";
import { useRouter } from "next/navigation";
import { useHeartsModal } from "@/store/use-hearts-modal";
import { usePractisesModal } from "@/store/use-practise-modal";

type props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
};
export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
}: props) => {
  const { open: openHeartsModal } = useHeartsModal();
  const { open: openPractiseModal } = usePractisesModal();
  const { width, height } = useWindowSize();

  useMount(() => {
    if (initialPercentage === 100) {
      openPractiseModal();
    }
  });

  const router = useRouter();
  const pointsPerChallenge = 10;
  const [correctAudio, _c, correctControls] = useAudio({
    src: "/correct.wav",
  });
  const [incorrectAudio, _i, incorrectControls] = useAudio({
    src: "/incorect.wav",
  });
  const [finishAudio] = useAudio({ src: "/finish.mp3", autoPlay: true });

  const [pending, startTransition] = useTransition();
  const [hearts, setHearts] = useState<number>(initialHearts);
  const [percentage, setPercentage] = useState<number>(() => {
    return initialPercentage === 100 ? 0 : initialPercentage;
  });
  const [lessonId] = useState<number>(initialLessonId);

  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed,
    );
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");

  const onSelect = (id: number) => {
    if (status !== "none") return;
    setSelectedOption(id);
  };
  const challenge = challenges[activeIndex];
  const options = challenge?.challengeOptions ?? [];

  const onNext = () => {
    // Check if the current challenge is of type 'READ' before updating progress
    if (challenge.type === "READ") {
      startTransition(() => {
        upsertChallengeProgress(challenge.id, challenge.type === "READ")
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }
            setPercentage((prev) => prev + 100 / challenges.length);
          })
          .catch(() => toast.error("Something went wrong, please try again"));
      });
    }

    // Move to the next challenge
    setActiveIndex((current) => current + 1);
  };

  const onContinue = () => {
    if (!selectedOption) return;
    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }
    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    const correctOption = options.find((option) => option.correct);
    if (!correctOption) return;
    if (correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }
            correctControls.play();
            setStatus("correct");
            setPercentage((prev) => prev + 100 / challenges.length);
            //this is practise
            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, 5));
            }
          })
          .catch(() => toast.error("Something went wrong, please try again"));
      });
    } else {
      startTransition(() => {
        reduceHearts(challenge.id)
          .then((response) => {
            if (response?.error === "hearts") {
              openHeartsModal();
              return;
            }
            incorrectControls.play();
            setStatus("wrong");
            if (!response?.error) {
              setHearts((prev) => Math.max(prev - 1, 0));
            }
          })
          .catch(() => toast.error("something went wrong"));
      });
    }
  };

  if (!challenge) {
    return (
      <>
        {finishAudio}
        <Confetti
          recycle={false}
          numberOfPieces={500}
          tweenDuration={10000}
          width={width}
          height={height}
        />
        <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center gap-y-4 text-center lg:gap-y-8">
          <Image
            src={"/finish.svg"}
            alt="finish"
            className="hidden lg:block"
            height={100}
            width={100}
          />
          <Image
            src={"/finish.svg"}
            alt="finish"
            className="block lg:hidden"
            height={50}
            width={50}
          />
          <h1 className="text-xl font-bold text-neutral-700 lg:text-3xl">
            Great Job! <br /> You&apos;ve completed the lesson
          </h1>
          <div className="flex w-full items-center gap-x-4">
            <ResultCard
              variant={"points"}
              value={challenges.length * pointsPerChallenge}
            />
            <ResultCard variant={"hearts"} value={hearts} />
            {/* TODO:REmove this hearts result after project is completed */}
          </div>
        </div>
        <Footer
          lessonId={lessonId}
          status="completed"
          onCheck={() => {
            router.push("/learn");
          }}
        />
      </>
    );
  }

  const title =
    challenge.type === "ASSIST"
      ? "Select the correct meaning"
      : challenge.question;

  return (
    <>
      {correctAudio}
      {incorrectAudio}
      {challenge.type === "READ" && (
        <audio src={challenge.audioSrc!} autoPlay />
      )}
      <Header hearts={hearts} percentage={percentage} />
      <div className="flex-1">
        <div className="flex h-full items-center justify-center">
          <div className="flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[600px] lg:px-0">
            <h1 className="text-center text-lg font-bold text-neutral-700 lg:text-3xl">
              {title}
            </h1>
            <div>
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={challenge.question} />
              )}
              <div className="flex w-full items-center justify-center">
                {challenge.type === "READ" && challenge.imageSrc && (
                  <Image
                    src={challenge.imageSrc}
                    className="max-h-[200px] max-w-[200px] object-contain"
                    alt="Read Challenge"
                    height={200}
                    width={200}
                  />
                )}
              </div>
              <Challenge
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedOption}
                disabled={pending}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer
        disabled={pending || (challenge.type !== "READ" && !selectedOption)}
        status={status}
        onCheck={
          challenge.type === "READ" ? () => onNext() : () => onContinue()
        }
        isReadType={challenge.type === "READ"}
      />
    </>
  );
};
