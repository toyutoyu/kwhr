"use client";

import Portfolio from "@/components/lottie/Portfolio";
import MainVisual from "@/components/main/MainVisual";
import ContactSection from "@/page/home/section/ContactSection";
import ProfileSection from "@/page/home/section/ProfileSection";
import SectionTitle from "@/components/section/SectionTitle";
import SkillSection from "@/page/home/section/SkillSection";
import WorksSection from "@/page/home/section/WorksSection";
import Stack from "@/components/stack/Stack";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        marginTop: "52px",
      }}
    >
      <MainVisual />

      <Stack>
        <ProfileSection />
        <SkillSection />
        <WorksSection />
        <ContactSection />
      </Stack>
    </main>
  );
}
