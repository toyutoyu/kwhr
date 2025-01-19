import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import Header from "@/components/header/Header";

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
    <StyledComponentsRegistry>
      <html lang="ja">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"
        />
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
          <Header />

          {children}
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
