"use client";

import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

// 背景が丸くなり、小さくなるアニメーション
const shrinkAnimation = keyframes`
  0% {
    border-radius: 0;
    transform: scale(1);
    opacity: 1;
  }
  100% {
    border-radius: 99999px;
    transform: scale(0);
    opacity: 0;
  }
`;

// 初期状態のスタイル
const StyledOverlay = styled.div<{ isComplete: boolean }>`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ isComplete }) =>
    isComplete &&
    css`
      ${shrinkAnimation} 1s ease-out forwards
    `};
`;

// 進捗テキストのスタイル
const StyledProgress = styled.p`
  font-style: italic;
  font-weight: 800;
  color: #fff;
  font-size: 40px;
`;

export default function Overlay() {
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progressRef.current < 100) {
        progressRef.current += 1;
        setProgress(progressRef.current);
      } else {
        clearInterval(interval);
        setTimeout(() => setIsComplete(true), 500); // 少し待ってアニメーションを開始
      }
    }, 20);

    return () => clearInterval(interval); // クリーンアップ
  }, []);

  return (
    <StyledOverlay isComplete={isComplete}>
      {!isComplete && <StyledProgress>{`${progress}%`}</StyledProgress>}
    </StyledOverlay>
  );
}
