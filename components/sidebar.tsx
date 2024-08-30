import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader, User } from "lucide-react";
type props = {
  className?: string;
};

export const Sidebar = ({ className }: props) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col justify-between border-r-2 px-4 lg:fixed lg:w-[256px]",
        className,
      )}
    >
      <div>
        <Link href={"/"}>
          <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
            <Image src={"/mascot.png"} height={40} width={40} alt="mascot" />
            <h1 className="pt-3 text-2xl font-extrabold tracking-wide text-green-600">
              JJTech
            </h1>
          </div>
        </Link>
        <div className="flex flex-1 flex-col gap-y-2">
          <SidebarItem label="Learn" iconSrc="/learn.svg" href="/learn" />
          <SidebarItem
            label="Leaderboard"
            iconSrc="/leaderboard.png"
            href="/leaderboard"
          />
          <SidebarItem label="Quests" iconSrc="/quests.png" href="/quests" />
          <SidebarItem label="Shop" iconSrc="/shop.png" href="/shop" />
        </div>
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
