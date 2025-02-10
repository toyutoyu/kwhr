import Image from "next/image";
import styled from "styled-components";

const StyledScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 1s infinite;
  position: relative;
  bottom: 20px;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const StyledScroll = styled.p`
  font-weight: 700;
`;

export default function Scroll() {
  return (
    <StyledScrollWrapper>
      <StyledScroll>Scroll</StyledScroll>
      <Image src="/images/V.svg" alt="scroll" width="36" height="36" />
    </StyledScrollWrapper>
  );
}
