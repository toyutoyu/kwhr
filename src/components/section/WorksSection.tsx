import Section from "@/components/section/Section";
import SectionTitle from "./SectionTitle";
import { StyledSectionBlueShapeBackground } from "@/components/section/style/Style";

export default function WorksSection() {
  return (
    <Section id="works">
      <StyledSectionBlueShapeBackground>
        <SectionTitle odd>WORKS</SectionTitle>
      </StyledSectionBlueShapeBackground>
    </Section>
  );
}
