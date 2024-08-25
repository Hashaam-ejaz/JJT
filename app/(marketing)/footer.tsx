import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size={"lg"} variant={"ghost"} className="w-fit">
          <Image
            src={"/englishUK.svg"}
            height={32}
            width={40}
            alt="English"
            className="mr-4 rounded-md"
          />
          English
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-fit">
          <Image
            src={"/urduPakistan.svg"}
            height={32}
            width={40}
            alt="Urdu"
            className="mr-4 rounded-md"
          />
          Urdu
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-fit">
          <Image
            src={"/maths.svg"}
            height={32}
            width={40}
            alt="Maths"
            className="mr-4 rounded-md"
          />
          Maths
        </Button>
      </div>
    </footer>
  );
};
