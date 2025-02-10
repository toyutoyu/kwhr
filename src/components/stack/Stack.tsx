"use client";

import { DefineSpacing, SpacingTokens } from "@/theme/spacing";
import React, { forwardRef } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  space?: SpacingTokens;
  direction?: "column" | "row" | "column-reverse";
  alignItems?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "baseline"
    | "stretch";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  flexWrap?: "nowrap" | "wrap";
};

const StyledStack = styled.div<{
  $space?: string;
  $direction?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $flexWrap?: string;
}>`
  display: flex;
  width: 100%;
  position: relative;
  ${({ $space, $direction, $alignItems, $justifyContent, $flexWrap }) => `
    flex-direction: ${$direction};
    ${$alignItems && `align-items: ${$alignItems}`};
    ${$justifyContent && `justify-content: ${$justifyContent}`};
    flex-wrap: ${$flexWrap};
    & > *:not(:first-child) {
      ${
        $space &&
        ($direction === "column"
          ? `margin-top: ${DefineSpacing[$space]};`
          : `margin-left: ${DefineSpacing[$space]};`)
      }
    }
  `}
`;

const Stack = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      space,
      direction = "column",
      alignItems,
      justifyContent,
      flexWrap = "nowrap",
    }: Props,
    ref
  ) => {
    return (
      <StyledStack
        $space={space}
        $direction={direction}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $flexWrap={flexWrap}
        ref={ref}
      >
        {children}
      </StyledStack>
    );
  }
);
export default Stack;
Stack.displayName = "Stack";
