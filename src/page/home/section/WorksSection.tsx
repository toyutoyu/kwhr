import Section from "@/components/section/Section";
import { StyledInnerSection } from "@/components/section/style/Style";
import useScroll from "@/hook/useScroll";
import SectionTitle from "../../../components/section/SectionTitle";
import WorksSectionContent from "./WroksSectionContent";
type Props = {
  odd?: boolean;
};
export default function WorksSection({ odd = false }: Props) {
  const { setLastElement, isVisible } = useScroll();
  return (
    <Section id="works" ref={setLastElement}>
      <SectionTitle isVisible={isVisible} odd={odd}>
        WORKS
      </SectionTitle>
      <StyledInnerSection>
        <WorksSectionContent />
      </StyledInnerSection>
    </Section>
  );
}
