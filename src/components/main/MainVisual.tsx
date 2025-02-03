"use client";
import { MediaSize } from "@/theme/mediaSize";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Portfolio from "../lottie/Portfolio";

const StyledMainVisual = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-70%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: -1;
  @media screen and (min-width: ${MediaSize.M}) {
    display: flex;
    top: -10%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -0);
  }
`;

export default function MainVisual() {
  const [isPause, setIsPause] = useState(false);
  useEffect(() => {
    setIsPause(true);
    setTimeout(() => {
      setIsPause(false);
    }, 2500);
  }, []);
  return (
    <StyledMainVisual>
      <Portfolio isPause={isPause} />
    </StyledMainVisual>
  );
}
