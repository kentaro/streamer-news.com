import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streamer News - 動画配信業界の最新ニュース",
  description:
    "動画配信業界の最新ニュースをAIがキュレーション。毎日更新される情報をチェックして、トレンドを逃さない。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-background">
          <Header />
          <div className="container py-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
