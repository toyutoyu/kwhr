"use client";
import SkillRadarChart from "@/components/chart/SkillRadarChart";
import Section from "@/components/section/Section";
import { StyledInnerSection } from "@/components/section/style/Style";
import Stack from "@/components/stack/Stack";
import skills from "@/json/skill.json";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import SkillBox from "../../../components/box/SkillBox";
import SectionTitle from "../../../components/section/SectionTitle";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function SkillSection() {
  const { ui, frontend, backend, framework, cloud, tool } = skills;
  return (
    <Section id="skill">
      <SectionTitle>SKILL</SectionTitle>
      <StyledInnerSection>
        <SkillRadarChart />
        <Stack space="M" justifyContent="center" alignItems="center">
          <SkillBox title="UI/UX" contents={ui} />
          <SkillBox title="Front-end" contents={frontend} />
          <SkillBox title="Back-end" contents={backend} />
          <SkillBox title="Framework" contents={framework} />
          <SkillBox title="Cloud" contents={cloud} />
          <SkillBox title="Tool" contents={tool} />
        </Stack>
      </StyledInnerSection>
    </Section>
  );
}
