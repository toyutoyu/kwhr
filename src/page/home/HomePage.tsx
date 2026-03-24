"use client";

import Stack from "@/components/stack/Stack";
import ContactSection from "@/page/home/section/ContactSection";
import ProfileSection from "@/page/home/section/ProfileSection";
import SkillSection from "@/page/home/section/SkillSection";
import WorksSection from "@/page/home/section/WorksSection";
import CareerSection from "./section/CareerSection";
import FirstViewSection from "./section/FirstViewSection";
import GallerySection from "./section/GallerySection";

export default function HomePage() {
  return (
    <main
      style={{
        position: "relative",
        marginTop: "52px",
      }}
    >
      <Stack space="X3L">
        <FirstViewSection />
        <ProfileSection />
        <CareerSection odd />
        <SkillSection />
        <GallerySection odd />
        <WorksSection />
        <ContactSection odd />
      </Stack>
    </main>
  );
}
