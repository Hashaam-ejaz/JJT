import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type props = {
  key: number;
  id: number;
  title: string;
  imgSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({
  title,
  id,
  imgSrc,
  disabled,
  onClick,
  active,
}: props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "pb06 flex h-full min-h-[217px] min-w-[200[x]] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-4 p-3 hover:bg-black/5 active:border-b-2",
        disabled && "pointer-events-none opacity-50",
      )}
    >
      <div className="flex min-h-[24px] w-full items-center justify-end">
        {active && (
          <div className="flex items-center justify-center rounded-md bg-green-600 p-1.5">
            <Check className="h-4 w-4 stroke-[4] text-white" />
          </div>
        )}
      </div>
      <Image
        src={imgSrc}
        alt={title}
        height={70}
        width={93.33}
        className="rounded-lg border object-cover drop-shadow-md"
      />
      <p className="texr-center mt-3 font-bold text-neutral-700">{title}</p>
    </div>
  );
};
