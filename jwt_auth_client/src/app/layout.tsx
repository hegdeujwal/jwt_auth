// src/app/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css";
import { Toaster } from "sonner"; // ✅ correct import

export const metadata: Metadata = {
  title: "JWT Auth App",
  description: "Login/Register using Next.js + ShadCN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
