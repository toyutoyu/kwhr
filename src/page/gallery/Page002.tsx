"use client";

import { Page } from "@/components/container/Page";
import Section from "@/components/section/Section";
import Stack from "@/components/stack/Stack";
import Image from "next/image";
import {
  Description,
  Square,
  StyledImage,
  Title,
  WhiteTitle,
} from "./style/Style";

export default function Page002() {
  return (
    <Page>
      <Section id="gallery">
        <Page>
          <Stack space="X5L">
            <Stack space="L" justifyContent="center" alignItems="center">
              <Stack space="M" justifyContent="center" alignItems="center">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  space="XXS"
                >
                  <Square>
                    <WhiteTitle>ラ</WhiteTitle>
                  </Square>
                  <Title>ンディンページ制作</Title>
                </Stack>

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

            <Stack space="L" justifyContent="center" alignItems="center">
              <Stack space="M" justifyContent="center" alignItems="center">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  space="XXS"
                >
                  <Square>
                    <WhiteTitle>ロ</WhiteTitle>
                  </Square>
                  <Title>ゴ制作・ブランディング企画</Title>
                </Stack>
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

            <Stack space="L" justifyContent="center" alignItems="center">
              <Stack space="M" justifyContent="center" alignItems="center">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  space="XXS"
                >
                  <Square>
                    <WhiteTitle>デ</WhiteTitle>
                  </Square>
                  <Title>ザインルール策定</Title>
                </Stack>
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

            <Stack space="L" justifyContent="center" alignItems="center">
              <Stack space="M" justifyContent="center" alignItems="center">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  space="XXS"
                >
                  <Square>
                    <WhiteTitle>オ</WhiteTitle>
                  </Square>
                  <Title>リジナルアイコン作成</Title>
                </Stack>
                <Description>
                  作成のルールがバラバラで一貫性が担保されていなかった。
                  <br />
                  また目指したい世界観を表現するクリエイティブとしてもデザインが古くなっていたため
                  為、リニューアルを行いました。
                </Description>
              </Stack>

              <StyledImage>
                <Image
                  src="/images/original_icon.png"
                  alt="オリジナルアイコン作成"
                  width={1}
                  height={1}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </StyledImage>
            </Stack>

            <Stack space="L" justifyContent="center" alignItems="center">
              <Stack space="M" justifyContent="center" alignItems="center">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  space="XXS"
                >
                  <Square>
                    <WhiteTitle>オ</WhiteTitle>
                  </Square>
                  <Title>リジナルイラスト作成</Title>
                </Stack>
                <Description>
                  タクシー業界ということもあり車体のデザインが多めです。
                </Description>
              </Stack>

              <StyledImage>
                <Image
                  src="/images/illust_work.png"
                  alt="イラスト制作"
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
