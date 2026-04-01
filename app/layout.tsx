import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/lib/providers";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sutorium — AI-powered Audience Intelligence",
  description:
    "Turn audience comments into real insights. Detect signals, trends, and opportunities using AI.",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", geist.variable)}>
      <body
        className="bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <QueryProvider>
          {children}
          <Toaster position="top-right" />
          <Analytics />
          <SpeedInsights />
        </QueryProvider>
      </body>
    </html>
  );
}
