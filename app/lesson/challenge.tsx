import { challengeOptions, challenges } from "@/database/schema";
import { cn } from "@/lib/utils";

type props = {
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number) => void;
  selectedOption?: number;
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
  status: "correct" | "wrong" | "none";
};

export const Challenge = ({
  options,
  onSelect,
  selectedOption,
  disabled,
  type,
  status,
}: props) => {
  return (
    <div
      className={cn(
        "grid gap-2",
        type === "ASSIST" && "grid-cols-2",
        type === "SELECT" &&
          "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
      )}
    >
      {options.map((option, index) => (
        <div key={index}>{JSON.stringify(option)}</div>
      ))}
    </div>
  );
};
