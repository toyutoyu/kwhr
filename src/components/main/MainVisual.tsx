"use client";
import { MediaSize } from "@/theme/mediaSize";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Portfolio from "../lottie/Portfolio";

const StyledMainVisual = styled.div`
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: -1;
  @media screen and (min-width: ${MediaSize.M}) {
    display: flex;
    width: 80%;
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
