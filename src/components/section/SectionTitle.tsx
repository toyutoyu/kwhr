import { MediaSize } from "@/theme/mediaSize";
import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  odd?: boolean;
  children: ReactNode;
  isVisible?: boolean;
};

const StyledSectionTitleWrapper = styled.div<{ isVisible: boolean }>`
  position: relative;
  margin-bottom: 24px;
  transition: transform 0.5s ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(-2000px)"};
`;
const StyledSectionTitle = styled.h1<{ $odd: boolean }>`
  position: relative;
  font-size: 48px;
  letter-spacing: 0.5rem;
  font-weight: 700;
  color: ${({ $odd }) => ($odd ? "black" : "white")};
  ${({ $odd }) => !$odd && "-webkit-text-stroke: 1px black;"}
  text-align: center;
  z-index: 1;
  @media screen and (min-width: ${MediaSize.M}) {
    font-size: 72px;
  }
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: 100px;
  }
`;
const StyledSectionTitleShadow = styled.h1<{ $odd: boolean }>`
  position: absolute;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  letter-spacing: 0.5rem;
  ${({ $odd }) => $odd && "-webkit-text-stroke: 1px black;"}
  color: ${({ $odd }) => ($odd ? "transparent" : "black")};
  top: 4px;
  left: 50%;
  transform: translateX(-52%);
  @media screen and (min-width: ${MediaSize.M}) {
    font-size: 72px;
  }
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: 100px;
    top: 8px;
  }
`;
export default function SectionTitle({
  children,
  odd = false,
  isVisible = false,
}: Props) {
  return (
    <StyledSectionTitleWrapper isVisible={isVisible}>
      <StyledSectionTitle $odd={odd}>{children}</StyledSectionTitle>
      <StyledSectionTitleShadow $odd={odd}>{children}</StyledSectionTitleShadow>
    </StyledSectionTitleWrapper>
  );
}
