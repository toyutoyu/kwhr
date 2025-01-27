"use client";

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
      <Header />
      {children}
    </>
  );
}
