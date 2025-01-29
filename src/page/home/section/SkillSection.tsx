"use client";
import Section from "@/components/section/Section";
import SectionTitle from "../../../components/section/SectionTitle";
import {
  StyledInnerSection,
  StyledSectionYelllowShapeBackground,
} from "@/components/section/style/Style";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import SkillRadarChart from "@/components/chart/SkillRadarChart";
ChartJS.register(ArcElement, Tooltip, Legend);
import skills from "@/json/skill.json";
import Stack from "@/components/stack/Stack";
import SkillBox from "../../../components/box/SkillBox";
export default function SkillSection() {
  const { ui, frontend, backend, framework, cloud, tool } = skills;
  return (
    <Section id="skill">
      <StyledSectionYelllowShapeBackground>
        <SectionTitle>SKILL</SectionTitle>
        <StyledInnerSection>
          <SkillRadarChart />
          <Stack space="X3L" justifyContent="center" alignItems="center">
            <SkillBox title="UI/UX" contents={ui} />
            <SkillBox title="Front-end" contents={frontend} />
            <SkillBox title="Back-end" contents={backend} />
            <SkillBox title="Framework" contents={framework} />
            <SkillBox title="Cloud" contents={cloud} />
            <SkillBox title="Tool" contents={tool} />
          </Stack>
        </StyledInnerSection>
      </StyledSectionYelllowShapeBackground>
    </Section>
  );
}
