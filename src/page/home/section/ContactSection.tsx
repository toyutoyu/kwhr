import Button from "@/components/button/Button";
import Section from "@/components/section/Section";
import { StyledInnerSection } from "@/components/section/style/Style";
import Stack from "@/components/stack/Stack";
import Image from "next/image";
import Link from "next/link";
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
          <Link
            target="_black"
            href="https://www.wantedly.com/id/shimeji_mashroom"
          >
            <Image
              src="/images/wantedlyLogoBlk.svg"
              alt="wantedly"
              width={200}
              height={100}
            />
          </Link>
        </Stack>
      </StyledInnerSection>
    </Section>
  );
}
