import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};
const StyledText = styled.p`
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.XXS};
  letter-spacing: 1.2;
  line-height: 1.2;
  text-align: center;
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
  }
`;
export default function Text({ children }: Props) {
  return <StyledText>{children}</StyledText>;
}
