"use client";
import Lottie from "react-lottie";
import portfolio from "../../../public/lottie/portfolio/data.json";
import { CSSProperties } from "react";

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
};

export default function Portfolio() {
  return (
    <div
      style={{
        position: "absolute",
        transform: "scale(1)",
        width: "100%",
      }}
    >
      <Lottie
        options={defaultOption}
        isStopped={false}
        isPaused={false}
        style={defaultStyle}
      />
    </div>
  );
}
