"use client";

import { GlobalStyles } from "@/components/container/style/Style";
import Header from "@/components/header/Header";
import Splash from "@/components/splash/Splash";
import { ReactNode } from "react";
import { Reset } from "styled-reset";

type Props = {
  children: ReactNode;
};

export default function App({ children }: Props) {
  return (
    <>
      <Reset />
      {/* <Splash /> */}
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}
