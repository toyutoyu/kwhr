"use client";
import Lottie from "react-lottie";
import styled from "styled-components";
import portfolio from "../../../public/lottie/portfolio/data.json";

const defaultOption = {
  loop: false,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
  animationData: portfolio,
};
const LottieWrapper = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
`;

type Props = {
  isPause?: boolean;
};

export default function Portfolio({ isPause = false }: Props) {
  return (
    <LottieWrapper>
      <Lottie
        options={defaultOption}
        isStopped={false}
        isPaused={isPause}
        // style={defaultStyle}
      />
    </LottieWrapper>
  );
}
