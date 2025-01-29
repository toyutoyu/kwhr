import { useEffect, useState } from "react";
import Portfolio from "../lottie/Portfolio";
import Image from "next/image";

export default function MainVisual() {
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    setIsPause(true);

    setTimeout(() => {
      setIsPause(false);
    }, 2000);
  }, []);
  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Portfolio isPause={isPause} />
      <div style={{ position: "absolute", bottom: "50px", width: "100%" }}>
        <Image
          src="/images/2023-2025.svg"
          alt="2023-2025"
          width="700"
          height="400"
          style={{
            width: "70%",
            height: "70%",
          }}
        />
      </div>
    </div>
  );
}
