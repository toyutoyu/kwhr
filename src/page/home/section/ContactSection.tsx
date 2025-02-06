import Button from "@/components/button/Button";
import Section from "@/components/section/Section";
import { StyledInnerSection } from "@/components/section/style/Style";
import Stack from "@/components/stack/Stack";
import { useRouter } from "next/navigation";
import SectionTitle from "../../../components/section/SectionTitle";

export default function ContactSection() {
  const router = useRouter();
  return (
    <Section id="contact">
      <SectionTitle odd>CONTACT</SectionTitle>
      <StyledInnerSection>
        <Stack alignItems="center" justifyContent="center">
          <Button onClick={() => router.push("/contact")}>お問い合わせ</Button>
        </Stack>
      </StyledInnerSection>
    </Section>
  );
}
