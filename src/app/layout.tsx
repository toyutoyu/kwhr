import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import backgroundImage from "../../public/images/isometric.png";
import Image from "next/image";

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kwhr",
  description: "kwhr's portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${chakraPetch.className}`}
        style={{
          backgroundColor: "#DFDFDF",
          backgroundImage: "url(/images/isometric.png)",
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "100%",
        }}
      >
        {children}
      </body>
    </html>
  );
}
