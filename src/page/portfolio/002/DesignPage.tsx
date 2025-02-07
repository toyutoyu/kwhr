"use client";

import { Page } from "@/components/container/Page";
import Section from "@/components/section/Section";
import SectionTitle from "@/components/section/SectionTitle";
import Stack from "@/components/stack/Stack";
import { DefineColor } from "@/theme/color";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import Image from "next/image";
import styled from "styled-components";
const StyledImage = styled.div`
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h2`
  font-family: var(--font-notojp);
  font-weight: 700;
  font-size: ${DefineFontSize.L};
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.XXL};
  }
`;
const Description = styled.p`
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.XS};
  line-height: 1.2;
  text-align: center;
  color: ${DefineColor.GRAY_700};
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
  }
`;

export default function DesignPage() {
  return (
    <Page>
      <Section id="gallery">
        <SectionTitle odd>GALLERY</SectionTitle>
        <Page>
          <Stack space="X5L">
            <Stack space="L" justifyContent="center" alignItems="center">
              <Stack space="M" justifyContent="center" alignItems="center">
                <Title>ランディンページ制作</Title>
                <Description>
                  ランディングページ制作において、デザインとコーディングを一貫して担当。
                  <br />
                  限られたスペースの中で、ユーザーの関心を高める要素を厳選し、シンプルかつ印象的に仕上げています。
                </Description>
              </Stack>

              <StyledImage>
                <Image
                  src="/images/portfolio/all-landing.png"
                  alt="ポートフォリオサイトのトップ画像"
                  width={1}
                  height={1}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </StyledImage>
            </Stack>

            <Stack space="XS" justifyContent="center" alignItems="center">
              <Stack space="L" justifyContent="center" alignItems="center">
                <Stack space="M" justifyContent="center" alignItems="center">
                  <Title>ロゴ制作・ブランディング企画</Title>
                  <Description>
                    AI自動配車システム「Noruuu」のコンセプトを深く掘り下げ、ブランドの核となる価値をロゴへと具現化。
                    <br />
                    さらにウェブやアプリ、印刷物などあらゆる媒体に展開可能な一貫性のあるブランド体験をデザインしました。
                  </Description>
                </Stack>

                <StyledImage>
                  <Stack space="XL">
                    <Image
                      src="/images/gallery-logo.png"
                      alt="ポートフォリオサイトのトップ画像"
                      width={1}
                      height={1}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <Image
                      src="/images/touch-point.png"
                      alt="ポートフォリオサイトのトップ画像"
                      width={1}
                      height={1}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Stack>
                </StyledImage>
              </Stack>
            </Stack>
            <Stack space="L" justifyContent="center" alignItems="center">
              <Stack space="M" justifyContent="center" alignItems="center">
                <Title>デザインルール作成</Title>
                <Description>
                  カラーパレットやタイポグラフィといったビジュアル面だけでなく、ボタンやフォームなどのUIコンポーネント設計、各種状態のガイドラインをまとめ、チーム全体で共有できるデザインルールとして整備しました。
                </Description>
              </Stack>

              <StyledImage>
                <Image
                  src="/images/portfolio/design-rule.png"
                  alt="ポートフォリオサイトのトップ画像"
                  width={1}
                  height={1}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </StyledImage>
            </Stack>
          </Stack>
        </Page>
      </Section>
    </Page>
  );
}
