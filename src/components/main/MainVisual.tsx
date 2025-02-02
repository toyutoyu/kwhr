import { MediaSize } from "@/theme/mediaSize";
import styled from "styled-components";
import Portfolio from "../lottie/Portfolio";

const StyledMainVisual = styled.div`
  position: relative;
  top: 0px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: -1;
  @media screen and (min-width: ${MediaSize.M}) {
    display: flex;
  }
`;

export default function MainVisual() {
  return (
    <StyledMainVisual>
      <Portfolio />
    </StyledMainVisual>
  );
}
