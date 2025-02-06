import Section from "@/components/section/Section";
import { StyledInnerSection } from "@/components/section/style/Style";
import Stack from "@/components/stack/Stack";
import { DefineColor } from "@/theme/color";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { DefineShadow } from "@/theme/shadow";
import { DefineSpacing } from "@/theme/spacing";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import SectionTitle from "../../../components/section/SectionTitle";

const Card = styled.div`
  box-shadow: ${DefineShadow.LEVEL2};
  padding: ${DefineSpacing.M};
  background-color: white;
  width: 100%;
  max-width: 540px;
  min-height: 120px;
  border: 1px solid black;
  @media screen and (min-width: ${MediaSize.S}) {
    min-height: 180px;
  }
`;

const Title = styled.h5`
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.M};
  font-weight: 700;
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.L};
  }
`;
const Description = styled.p`
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.XS};
  line-height: 1.2;
  color: ${DefineColor.GRAY_700};
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.S};
  }
`;

const StyledPortfolioImage = styled.div`
  width: 50%;
  height: 50%;
  box-shadow: ${DefineShadow.LEVEL1};
`;

export default function GallerySection() {
  const router = useRouter();
  return (
    <Section id="gallery">
      <SectionTitle odd>GALLERY</SectionTitle>
      <StyledInnerSection>
        <Stack alignItems="center" justifyContent="center" space="M">
          <Link href="/portfolio/002">
            <Card>
              <Stack direction="row" alignItems="flex-start" space="M">
                <StyledPortfolioImage>
                  <Image
                    src="/images/portfolio/all-landing.png"
                    alt="ポートフォリオサイトのトップ画像"
                    width={183.6}
                    height={130.56}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </StyledPortfolioImage>

                <Stack space="S">
                  <Title>デザインアセット</Title>
                  <Description>
                    作成したデザインアセットなどをまとめております。
                  </Description>
                </Stack>
              </Stack>
            </Card>
          </Link>
          <Link href="/portfolio/001">
            <Card>
              <Stack direction="row" alignItems="flex-start" space="M">
                <StyledPortfolioImage>
                  <Image
                    src="/images/top.png"
                    alt="ポートフォリオサイトのトップ画像"
                    width={183.6}
                    height={130.56}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </StyledPortfolioImage>

                <Stack space="S">
                  <Title>YUTO KAWAHARA ポートフォリオ用サイト</Title>
                  <Description>
                    ポートフォリオ用サイトです。現在のITスキルなどをまとめております。
                  </Description>
                </Stack>
              </Stack>
            </Card>
          </Link>
        </Stack>
      </StyledInnerSection>
    </Section>
  );
}
