"use client";

import { GlobalStyles } from "@/components/container/style/Style";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Splash from "@/components/splash/Splash";
import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Reset } from "styled-reset";

type Props = {
  children: ReactNode;
};

export default function App({ children }: Props) {
  return (
    <>
      <Reset />
      <Splash />
      <GlobalStyles />
      <Header />
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
        language="ja"
      >
        {children}
      </GoogleReCaptchaProvider>
      <Footer />
    </>
  );
}
