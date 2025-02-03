import Scroll from "@/components/animation/Scroll";
import TypingText from "@/components/animation/TypingText";
import MainVisual from "@/components/main/MainVisual";
import Stack from "@/components/stack/Stack";
import styled from "styled-components";
const StyledFirstView = styled.div`
  position: relative;
  height: 100vh;
`;
const StyledFirstViewWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StyledScrollAnimation = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
`;

export default function FirstViewSection() {
  return (
    <StyledFirstView>
      <StyledFirstViewWrapper>
        <Stack alignItems="center" justifyContent="center" space="XXS">
          <TypingText text="YUTO KAWAHARA" textSizeRem={4} />
          <TypingText text="DESIGN ENGINEER PORTFOLIO." textSizeRem={1.5} />
        </Stack>
      </StyledFirstViewWrapper>
      <MainVisual />

      <StyledScrollAnimation>
        <Scroll />
      </StyledScrollAnimation>
    </StyledFirstView>
  );
}
