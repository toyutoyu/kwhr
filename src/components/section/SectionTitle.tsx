import { DefineColor } from "@/theme/color";
import { MediaSize } from "@/theme/mediaSize";
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
  font-size: 60px;
  letter-spacing: 1.02rem;
  font-weight: 700;
  color: ${DefineColor.black};
  text-align: center;
  /* ${({ $odd }) => ($odd ? "text-align: left" : "text-align: right")}; */
  z-index: 1;
  @media screen and (min-width: ${MediaSize.M}) {
    font-size: 80px;
  }
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: 120px;
  }
`;
const StyledSectionTitleShadow = styled.h1<{ $odd: boolean }>`
  position: absolute;
  font-weight: 700;
  font-size: 60px;
  text-align: center;
  letter-spacing: 1.02rem;
  -webkit-text-stroke: 1px ${DefineColor.black};
  color: transparent;
  top: 4px;
  left: 50%;
  transform: translateX(-52%);
  @media screen and (min-width: ${MediaSize.M}) {
    font-size: 80px;
  }
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: 120px;
    top: 8px;
  }
`;

export default function SectionTitle({ odd = false, children }: Props) {
  return (
    <StyledSectionTitleWrapper>
      <StyledSectionTitle $odd={odd}>{children}</StyledSectionTitle>
      <StyledSectionTitleShadow $odd={odd}>{children}</StyledSectionTitleShadow>
    </StyledSectionTitleWrapper>
  );
}
