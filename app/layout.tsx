import type { Metadata } from "next";
import "./globals.css";
import pretendard from "./font/pretendard";
import Header from "@components/Header";

export const metadata: Metadata = {
  title: "My Classroom",
  description: "My Classroom...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={pretendard.className}>
        <main className="h-screen w-full overflow-y-auto bg-bgColor pb-10">
          <Header />
          <div className="flex w-full justify-center">
            <div className="flex w-full max-w-[1147px] flex-col items-start px-9 ">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
