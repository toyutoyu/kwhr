"use client";
import SkillRadarChart from "@/components/chart/SkillRadarChart";
import Section from "@/components/section/Section";
import { StyledInnerSection } from "@/components/section/style/Style";
import useScroll from "@/hook/useScroll";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import SectionTitle from "../../../components/section/SectionTitle";
import SkillSectionContent from "./SkillSectionContent";
ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  odd?: boolean;
};
export default function SkillSection({ odd = false }: Props) {
  const { setLastElement, isVisible } = useScroll();
  return (
    <Section id="skill" ref={setLastElement}>
      <SectionTitle isVisible={isVisible} odd={odd}>
        SKILL
      </SectionTitle>
      <StyledInnerSection>
        <SkillRadarChart />
        <SkillSectionContent />
      </StyledInnerSection>
    </Section>
  );
}
