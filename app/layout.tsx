import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/query-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai"],
  variable: "--font-ibm-plex-thai",
});

export const metadata: Metadata = {
  title: "Constructa - วัสดุก่อสร้างคุณภาพครบวงจร",
  description: "ศูนย์รวมวัสดุก่อสร้าง ปูน เหล็ก ไม้ สี และเครื่องมือช่างคุณภาพสูง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} ${ibmPlexThai.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

