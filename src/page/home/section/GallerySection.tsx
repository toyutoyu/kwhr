import Section from "@/components/section/Section";
import { StyledInnerSection } from "@/components/section/style/Style";
import Stack from "@/components/stack/Stack";
import useScroll from "@/hook/useScroll";
import { DefineColor } from "@/theme/color";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { DefineShadow } from "@/theme/shadow";
import { DefineSpacing } from "@/theme/spacing";
import Image from "next/image";
import Link from "next/link";
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
  transition: transform 150ms linear;

  &:hover,
  &:active {
    transform: scale(0.95);
    background-color: ${DefineColor.GRAY_100};
  }
  @media screen and (min-width: ${MediaSize.S}) {
    min-height: 180px;
  }
`;

const Title = styled.h5`
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.M};
  font-weight: 700;
  line-height: 1.2;
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
  const { setLastElement, isVisible } = useScroll();
  return (
    <Section id="gallery" ref={setLastElement}>
      <SectionTitle odd isVisible={isVisible}>
        GALLERY
      </SectionTitle>
      <StyledInnerSection>
        <Stack alignItems="center" justifyContent="center" space="M">
          <Link href="/gallery/003">
            <Card>
              <Stack direction="row" alignItems="flex-start" space="M">
                <StyledPortfolioImage>
                  <Image
                    src="/images/IMG_0008.png"
                    alt="社内向けiPad用受付アプリ"
                    width={1}
                    height={1}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </StyledPortfolioImage>

                <Stack space="S">
                  <Title>社内向けiPad用受付アプリ</Title>
                  <Description>
                    Flutterで個人開発したものを社内向けに公開しました。
                  </Description>
                </Stack>
              </Stack>
            </Card>
          </Link>
          <Link href="/gallery/002">
            <Card>
              <Stack direction="row" alignItems="flex-start" space="M">
                <StyledPortfolioImage>
                  <Image
                    src="/images/portfolio/all-landing.png"
                    alt="LP制作/ロゴ・ブランディング企画/デザインルール策定"
                    width={1}
                    height={1}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </StyledPortfolioImage>

                <Stack space="S">
                  <Title>
                    LP制作/ロゴ・ブランディング企画/デザインルール策定
                  </Title>
                  <Description>
                    作成したデザインアセットなどをまとめております。
                  </Description>
                </Stack>
              </Stack>
            </Card>
          </Link>
          <Link href="/gallery/001">
            <Card>
              <Stack direction="row" alignItems="flex-start" space="M">
                <StyledPortfolioImage>
                  <Image
                    src="/images/top.png"
                    alt="ポートフォリオサイトのトップ画像"
                    width={1}
                    height={1}
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
