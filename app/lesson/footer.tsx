import { useKey, useMedia } from "react-use";
import { Check, CheckCircle, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type props = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonId?: number;
  isReadType?: boolean;
};
export const Footer = ({
  onCheck,
  status,
  disabled,
  lessonId,
  isReadType,
}: props) => {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)", false);
  return (
    <footer
      className={cn(
        "h-[100px] border-t-2 lg:h-[140px]",
        status === "correct" && "border-transparent bg-green-100",
        status === "wrong" && "border-transparent bg-rose-100",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="flex items-center text-base font-bold text-green-500 lg:text-2xl">
            <CheckCircle className="mr-4 h-6 w-6 lg:h-20 lg:w-10" /> Nicely
            Done!
          </div>
        )}
        {status === "wrong" && (
          <div className="flex items-center text-base font-bold text-rose-500 lg:text-2xl">
            <XCircle className="mr-4 h-6 w-6 lg:h-20 lg:w-10" /> Try Again
          </div>
        )}

        {status === "completed" && (
          <Button
            variant={"default"}
            size={isMobile ? "sm" : "lg"}
            onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            {" "}
            Practise again
          </Button>
        )}

        <Button
          variant={status === "wrong" ? "danger" : "secondary"}
          size={isMobile ? "sm" : "lg"}
          disabled={disabled}
          onClick={onCheck}
          className="ml-auto"
        >
          {/* {status === "none" && "Check"}
          {status === "correct" && "Next"}
          {status === "wrong" && "Retry"}
          {status === "completed" && "Continue"} */}
          {isReadType
            ? status === "completed"
              ? "Continue"
              : "Next"
            : status === "none"
              ? "Check"
              : status === "correct"
                ? "Next"
                : status === "wrong"
                  ? "Retry"
                  : "Continue"}
        </Button>
      </div>
    </footer>
  );
};
