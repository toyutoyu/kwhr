"use client";

import { Page } from "@/components/container/Page";
import Section from "@/components/section/Section";
import Stack from "@/components/stack/Stack";
import { DefineShadow } from "@/theme/shadow";
import Image from "next/image";
import {
  Description,
  Square,
  StyledImage,
  Title,
  WhiteTitle,
} from "./style/Style";

export default function Page003() {
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
                    <WhiteTitle>ク</WhiteTitle>
                  </Square>
                  <Title>ライアントワーク</Title>
                </Stack>
                <StyledImage>
                  <Image
                    src="/images/IMG_0008.png"
                    alt="社内向けiPad用受付アプリ"
                    width={1}
                    height={1}
                    style={{
                      width: "100%",
                      height: "100%",
                      boxShadow: `${DefineShadow.LEVEL1}`,
                    }}
                  />
                </StyledImage>
                <Description>
                  社内向けのiPad用受付アプリです。
                  <br />
                  Flutter学習のために個人開発したものを社内向けに公開しました。
                </Description>
              </Stack>
            </Stack>
          </Stack>
        </Page>
      </Section>
    </Page>
  );
}
