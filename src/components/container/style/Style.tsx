"use client";
import styled from "styled-components";

export const StyledBody = styled.body`
  position: relative;
  padding-bottom: 100px;
  border: none;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  & ::-webkit-scrollbar {
    display: none;
  }
`;

import { createGlobalStyle, keyframes } from "styled-components";

/* ==== 1) 変数 (SCSS -> JS 定数) ==== */
const BG_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";
const BG_WIDTH = "50px";
const BG_HEIGHT = "50px";

/* ==== 2) keyframes (SCSS -> styled-components) ==== */
const bgScrollingReverse = keyframes`
  100% {
    background-position: ${BG_WIDTH} ${BG_HEIGHT};
  }
`;

/* ==== 3) GlobalStyleを作成 ==== */
export const GlobalStyles = createGlobalStyle`
  body {
    margin-top: 13.5rem;
    background: url(${BG_URL}) repeat 0 0;
    animation: ${bgScrollingReverse} 0.80s infinite linear;
    letter-spacing: 0.05em;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 50px;

  }
`;
