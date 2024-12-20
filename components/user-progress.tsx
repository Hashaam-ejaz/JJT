import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { courses } from "@/database/schema";

type props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
};
export const UserProgress = ({ activeCourse, hearts, points }: props) => {
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Link href={"/courses"}>
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            height={32}
            width={32}
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-orange-500">
          <Image
            src={"/points.png"}
            alt="points"
            height={28}
            width={28}
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href={"/courses"}>
        <Button variant={"ghost"} className="text-rose-500">
          <Image
            src={"/heart.png"}
            alt="hearts"
            height={22}
            width={22}
            className="mr-2"
          />
          {hearts}
        </Button>
      </Link>
    </div>
  );
};
