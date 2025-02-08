import { DefineColor } from "@/theme/color";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import styled from "styled-components";

export const StyledImage = styled.div`
  max-width: 600px;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: var(--font-notojp);
  font-weight: 700;
  font-size: ${DefineFontSize.L};
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.XXL};
  }
`;

export const WhiteTitle = styled(Title)`
  color: white;
  font-size: ${DefineFontSize.XL};
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.X3L};
  }
`;

export const Description = styled.p`
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.XS};
  line-height: 1.2;
  text-align: center;
  color: ${DefineColor.GRAY_700};
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
  }
`;
export const Square = styled.div`
  width: 36px;
  height: 36px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-15deg);
  @media screen and (min-width: ${MediaSize.S}) {
    width: 60px;
    height: 60px;
  }
`;

export const OlSquare = styled.ol`
  list-style-type: square;
  list-style-position: inside;
  text-indent: -1rem;
  padding-left: 1rem;
`;

export const OlNumber = styled.ol`
  list-style-type: decimal;
  list-style-position: inside;
  text-indent: -1rem;
  padding-left: 1rem;
`;
export const Item = styled.li`
  text-align: left;
  color: black;
  line-height: 1.5;
`;
