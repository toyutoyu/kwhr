import Section from "@/components/section/Section";
import { StyledInnerSection } from "@/components/section/style/Style";
import useScroll from "@/hook/useScroll";
import SectionTitle from "../../../components/section/SectionTitle";
import WorksSectionContent from "./WroksSectionContent";

export default function WorksSection() {
  const { setLastElement, isVisible } = useScroll();
  return (
    <Section id="works" ref={setLastElement}>
      <SectionTitle isVisible={isVisible}>WORKS</SectionTitle>
      <StyledInnerSection></StyledInnerSection>
      <WorksSectionContent />
    </Section>
  );
}
