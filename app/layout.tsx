import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ModalProvider } from "@/components/providers/modal-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeKata",
  description: "A task to showcase my react skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // @dev suppressHydrationWarning for content that will inevitably differ between sv and client, don't abuse 
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
