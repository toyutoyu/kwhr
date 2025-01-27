"use client";

import Portfolio from "@/components/lottie/Portfolio";
import ContactSection from "@/section/ContactSection";
import ProfileSection from "@/section/ProfileSection";
import SectionTitle from "@/section/SectionTitle";
import SkillSection from "@/section/SkillSection";
import WorksSection from "@/section/WorksSection";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    setIsPause(true);

    setTimeout(() => {
      setIsPause(false);
    }, 2000);
  }, []);

  return (
    <div>
      <main style={{ position: "relative", width: "100%" }}>
        {/* <div
          style={{
            position: "relative",
            top: "60px",
            width: "100%",
            height: "100%",
          }}
        > */}
          {/* <Portfolio isPause={isPause} /> */}
        {/* </div> */}
        {/* <div style={{ position: "relative", top: "340px", width: "100%" }}>
          <Image
            src="/images/2023-2025.svg"
            alt="2023-2025"
            width="700"
            height="400"
          />
        </div> */}
        <ProfileSection />
        <SkillSection />
        <WorksSection />
        <ContactSection />
      </main>
    </div>
  );
}
