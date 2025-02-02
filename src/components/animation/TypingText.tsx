import { MediaSize } from "@/theme/mediaSize";
import styled, { keyframes } from "styled-components";
const typing = keyframes`
   from {
      width: 0;
    }
`;

const blink = keyframes`
   50% {
      border-color: transparent;
    }
`;
const letterSpacingNum = 0.5;

const StyledTypingText = styled.p<{ textLength: number; textSizeRem: number }>`
  width: ${({ textLength }) => {
    const letterSpacingTotal = (textLength - 1) * (letterSpacingNum / 2);
    return `calc(${textLength}ch + ${letterSpacingTotal}rem)`;
  }};

  border-right: 2px solid #000;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${({ textSizeRem }) => `${textSizeRem / 2.5}rem`};
  line-height: 1;
  letter-spacing: ${letterSpacingNum / 2}rem;
  font-weight: 700;
  animation: ${typing} 3s steps(${({ textLength }) => textLength}),
    ${blink} 0.5s step-end infinite alternate; /*アニメーション関連*/

  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${({ textSizeRem }) => `${textSizeRem}rem`};
    border-right: 4px solid #000;
    letter-spacing: ${letterSpacingNum}rem;
    width: ${({ textLength }) => {
      const letterSpacingTotal = (textLength - 1) * letterSpacingNum;
      return `calc(${textLength}ch + ${letterSpacingTotal}rem)`;
    }};
  }
`;
type Props = {
  text: string;
  textSizeRem: number;
};

export default function TypingText({ text, textSizeRem }: Props) {
  return (
    <StyledTypingText textLength={text.length} textSizeRem={textSizeRem}>
      {text}
    </StyledTypingText>
  );
}
