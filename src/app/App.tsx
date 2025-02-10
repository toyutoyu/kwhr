"use client";

import { GlobalStyles } from "@/components/container/style/Style";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Splash from "@/components/splash/Splash";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
import { ReactNode, useEffect } from "react";
import { Reset } from "styled-reset";

type Props = {
  children: ReactNode;
};

export default function App({ children }: Props) {
  useEffect(() => {
    if (!analytics) return;
    logEvent(analytics, "page_view");
  }, []);
  return (
    <>
      <Reset />
      <Splash />
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </>
  );
}
