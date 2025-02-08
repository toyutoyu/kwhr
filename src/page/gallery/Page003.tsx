"use client";

import { Page } from "@/components/container/Page";
import Section from "@/components/section/Section";
import Stack from "@/components/stack/Stack";
import { DefineShadow } from "@/theme/shadow";
import Image from "next/image";
import {
  Description,
  Item,
  OlNumber,
  OlSquare,
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
                    <WhiteTitle>社</WhiteTitle>
                  </Square>
                  <Title>内向けiPad用受付アプリ</Title>
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
                  ポートフォリオサイトです。現在のITスキルなどをまとめております。
                  <br />
                  レスポンシブ対応済みで、PC/タブレット/スマートフォンからアクセス可能です。
                </Description>
              </Stack>
            </Stack>

            <Stack space="L" justifyContent="center" alignItems="center">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                space="XXS"
              >
                <Square>
                  <WhiteTitle>使</WhiteTitle>
                </Square>
                <Title>用言語・環境</Title>
              </Stack>
              <Stack justifyContent="center" alignItems="center">
                <OlSquare>
                  <Item>
                    言語
                    <OlSquare>
                      <Item>Flutter/Dart</Item>
                    </OlSquare>
                  </Item>
                  <Item>
                    環境
                    <OlSquare>
                      <Item>Slack</Item>
                    </OlSquare>
                  </Item>
                  <Item>
                    インフラ
                    <Stack space="XS">
                      <OlSquare>
                        <Item>AWS</Item>
                        <OlSquare>
                          <Stack space="XXS">
                            <Item>Amazon API Gateway</Item>
                            <Item>AWS Lambda(Node.js 14.x)</Item>
                          </Stack>
                        </OlSquare>
                      </OlSquare>
                    </Stack>
                  </Item>
                </OlSquare>
              </Stack>
            </Stack>

            <Stack space="L" justifyContent="center" alignItems="center">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                space="XXS"
              >
                <Square>
                  <WhiteTitle>イ</WhiteTitle>
                </Square>
                <Title>ンフラ構成図</Title>
              </Stack>
              <StyledImage>
                <Image
                  src="/images/reception.drawio.png"
                  alt="インフラ構成図"
                  width={1}
                  height={1}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </StyledImage>
              <Description>
                <OlNumber>
                  <Stack space="XS">
                    <Item>
                      FlutterアプリケーションからAPI Gatewayにアクセス。
                    </Item>
                    <Item>
                      API GatewayのPOSTメソッドからLambda関数をコール。
                    </Item>
                    <Item>
                      Lambda関数とSESを連携しwebHookでSlackに通知する構成。
                    </Item>
                  </Stack>
                </OlNumber>
              </Description>
            </Stack>
          </Stack>
        </Page>
      </Section>
    </Page>
  );
}
