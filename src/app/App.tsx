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
        reCaptchaKey="6LeyUbUqAAAAALL4N3pQdHcD4CMHA8YXzmKvy7gb"
        language="ja"
      >
        {children}
      </GoogleReCaptchaProvider>
      <Footer />
    </>
  );
}
