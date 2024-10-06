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
import { usePractisesModal } from "@/store/use-practise-modal";
import Image from "next/image";
import { useState, useEffect } from "react";

export const PractiseModal = () => {
  const [isClient, setIsClient] = useState<boolean>();
  const { isOpen, close } = usePractisesModal();

  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mb-5 flex w-full items-center justify-center">
            <Image src={"/heart.png"} alt="Heart" height={100} width={100} />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            Did you run out of hearts ?
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Use Practise lessons to regain hearts and points. You cannot loose
            hearts or points in practise lessons.
          </DialogDescription>
          <DialogFooter className="mb-4">
            <div className="flex w-full flex-col gap-y-4">
              <Button
                variant={"primary"}
                className="w-full"
                size={"lg"}
                onClick={close}
              >
                I Understand
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
