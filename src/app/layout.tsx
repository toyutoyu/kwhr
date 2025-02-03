import { StyledBody } from "@/components/container/style/Style";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import type { Metadata } from "next";
import { Chakra_Petch, Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";
import App from "./App";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakraPetch",
});

const notojp = Noto_Sans_JP({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
});

const makinas4 = localFont({
  src: "../../public/fonts/Makinas-4-Flat.otf",
  variable: "--font-makinas4",
  display: "swap",
});

export const metadata: Metadata = {
  title: "kwhr-portfolio",
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
        <StyledBody
          className={`${chakraPetch.className} ${chakraPetch.variable} ${notojp.variable} ${makinas4.variable}`}
        >
          <App>{children}</App>
        </StyledBody>
      </html>
    </StyledComponentsRegistry>
  );
}
