"use client";
import { DefineColor } from "@/theme/Color";
import styled from "styled-components";

export const StyledBody = styled.body`
  background-image: url("/images/background/isometric.png");
  background-color: ${DefineColor.background};
  background-repeat: repeat-y;
  background-attachment: scroll;
  background-size: 100%;
  background-position: 0 0;
  border: none;
  overflow-x: hidden;
`;
