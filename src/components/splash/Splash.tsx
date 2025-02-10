"use client";

import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import SquareLoader from "../animation/SquareLoader";
import Stack from "../stack/Stack";

const fadeOut = keyframes`
  0% {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    border-radius: 50%;
    width: 1600px;
    height: 1600px;
  }
  100% {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    border-radius: 50%;
    width: 0px;
    height: 0px;
  }
`;

// 初期状態のスタイル
const StyledSplash = styled.div<{ isComplete: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ isComplete }) =>
    isComplete &&
    css`
      ${fadeOut} 0.75s ease-in-out forwards
    `};
`;

export default function Splash() {
  const progressRef = useRef(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progressRef.current < 250) {
        progressRef.current += 1;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsComplete(true), 500); // 少し待ってアニメーションを開始
      }
    }, 10);

    return () => clearInterval(interval); // クリーンアップ
  }, []);

  return (
    <StyledSplash isComplete={isComplete}>
      {!isComplete && (
        <Stack alignItems="center" justifyContent="center">
          <SquareLoader />
        </Stack>
      )}
    </StyledSplash>
  );
}
