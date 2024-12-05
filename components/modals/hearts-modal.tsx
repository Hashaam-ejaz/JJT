"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useHeartsModal } from "@/store/use-hearts-modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState<boolean>();
  const { isOpen, close } = useHeartsModal();

  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  const onClick = () => {
    close();
    router.push("/shop");
  };
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mb-5 flex w-full items-center justify-center">
            <Image
              src={"/mascot_bad.png"}
              alt="bad Mascot"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            You ran out of hearts
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Get Pro for unlimited hearts, or purchase more from the store
          </DialogDescription>
          <DialogFooter className="mb-4">
            <div className="flex w-full flex-col gap-y-4">
              <Button
                variant={"primary"}
                className="w-full"
                size={"lg"}
                onClick={onClick}
              >
                Get Unlimited Hearts
              </Button>
              <Button
                variant={"primaryOutline"}
                className="w-full"
                size={"lg"}
                onClick={close}
              >
                No Thanks
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
