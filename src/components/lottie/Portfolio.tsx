"use client";
import { CSSProperties } from "react";
import Lottie from "react-lottie";
import portfolio from "../../../public/lottie/portfolio/data.json";

const defaultOption = {
  loop: false,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
  animationData: portfolio,
};

const defaultStyle: CSSProperties = {
  position: "relative",
  top: "0px",
  left: "0px",
  width: "100%",
  zIndex: "-1",
};

type Props = {
  isPause?: boolean;
};

export default function Portfolio({ isPause = false }: Props) {
  return (
    <Lottie
      options={defaultOption}
      isStopped={false}
      isPaused={isPause}
      style={defaultStyle}
    />
  );
}
