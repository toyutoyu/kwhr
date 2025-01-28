"use client";

import Portfolio from "@/components/lottie/Portfolio";
import ContactSection from "@/components/section/ContactSection";
import ProfileSection from "@/components/section/ProfileSection";
import SectionTitle from "@/components/section/SectionTitle";
import SkillSection from "@/components/section/SkillSection";
import WorksSection from "@/components/section/WorksSection";
import Stack from "@/components/stack/Stack";
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
      <main style={{ position: "relative", width: "100%", overflowX: "hidden" }}>
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
        <Stack space="XXL">
          <ProfileSection />
          <SkillSection />
          <WorksSection />
          <ContactSection />
        </Stack>
      </main>
    </div>
  );
}
