import { DefineColor } from "@/theme/Color";
import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  odd?: boolean;
  children: ReactNode;
};

const StyledSectionTitleWrapper = styled.div`
  position: relative;
`;
const StyledSectionTitle = styled.h1<{ $odd: boolean }>`
  position: relative;
  font-size: 120px;
  letter-spacing: 1.02rem;
  font-weight: 700;
  font-style: italic;
  color: ${({ $odd }) => ($odd ? DefineColor.white : DefineColor.black)};
  ${({ $odd }) => ($odd ? "text-align: left" : "text-align: right")};
  z-index: 1;
`;
const StyledSectionTitleShadow = styled.h1<{ $odd: boolean }>`
  position: absolute;
  font-size: 120px;
  font-weight: 700;
  letter-spacing: 1.02rem;
  font-style: italic;
  ${({ $odd }) => ($odd ? "left: -10px" : "right: 10px")};
  -webkit-text-stroke: 1px
    ${({ $odd }) => ($odd ? DefineColor.white : DefineColor.black)};
  color: transparent;
  top: 8px;
`;

export default function SectionTitle({ odd = false, children }: Props) {
  return (
    <StyledSectionTitleWrapper>
      <StyledSectionTitle $odd={odd}>{children}</StyledSectionTitle>
      <StyledSectionTitleShadow $odd={odd}>{children}</StyledSectionTitleShadow>
    </StyledSectionTitleWrapper>
  );
}
