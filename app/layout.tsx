import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import { PractiseModal } from "@/components/modals/practise-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JJT Education",
  description: "Learn English, Urdu and Maths",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className={font.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PractiseModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
