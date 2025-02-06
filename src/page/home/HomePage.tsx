"use client";

import Stack from "@/components/stack/Stack";
import ContactSection from "@/page/home/section/ContactSection";
import ProfileSection from "@/page/home/section/ProfileSection";
import SkillSection from "@/page/home/section/SkillSection";
import WorksSection from "@/page/home/section/WorksSection";
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
      <Stack space="X5L">
        <FirstViewSection />
        <ProfileSection />
        <SkillSection />
        <GallerySection />
        <WorksSection />
        <ContactSection />
      </Stack>
    </main>
  );
}
