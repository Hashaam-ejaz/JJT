import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type props = {
  hearts: number;
  percentage: number;
};

export const Header = ({ hearts, percentage }: props) => {
  const { open } = useExitModal();
  return (
    <header className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-x-7 px-10 pt-[20px] lg:pt-[50px]">
      <X
        onClick={open}
        className="cursor-pointer text-slate-500 transition hover:opacity-75"
      />
      <Progress value={percentage} />
      <div className="flex items-center font-bold text-rose-500">
        <Image
          src={"/heart.png"}
          height={28}
          width={28}
          alt="Hearts"
          className="mr-2"
        />
        {hearts}
      </div>
    </header>
  );
};
