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

export default function Page001() {
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
                    <WhiteTitle>ポ</WhiteTitle>
                  </Square>
                  <Title>ートフォリオ用サイト</Title>
                </Stack>
                <StyledImage>
                  <Image
                    src="/images/top.png"
                    alt="インフラ構成図"
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
            <Stack space="L">
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
                      <Item>HTML/CSS/JavaScript(React)</Item>
                    </OlSquare>
                  </Item>
                  <Item>
                    インフラ
                    <Stack space="XS">
                      <OlSquare>
                        <Item>AWS</Item>
                        <OlSquare>
                          <Stack space="XXS">
                            <Item>Amazon Route53</Item>
                            <Item>AWS Certificate Manager(ACM)</Item>
                            <Item>Amazon CloudFront</Item>
                            <Item>Simple Storage Service(Amazon S3)</Item>
                            <Item>Amazon API Gateway</Item>
                            <Item>AWS Lambda(Node.js 14.x)</Item>
                            <Item>Simple Email Service(SES)</Item>
                          </Stack>
                        </OlSquare>
                      </OlSquare>
                    </Stack>
                  </Item>
                </OlSquare>
              </Stack>
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
                    <WhiteTitle>イ</WhiteTitle>
                  </Square>
                  <Title>ンフラ構成</Title>
                </Stack>
              </Stack>

              <StyledImage>
                <Image
                  src="/images/portfolio/portfolio.drawio.png"
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
                    <Item>独自ドメインを使用しているため、Route53と連携。</Item>
                    <Item>
                      WebサイトをSSL/TLS実装するため、ACMでSSL証明書を発行しRoute53と連携。
                    </Item>
                    <Item>
                      Webサイトにアクセスする際にRoute53からCloudFrontに最新のキャッシュを返すための連携。
                    </Item>
                    <Item>
                      エッジサーバー(CloudFront)にWebサイト情報(S3を静的Webホスティング)をキャッシュするよう設定。
                    </Item>
                    <Item>
                      ポートフォリオサイトの「CONTACT」ページからお問い合わせがあった際、API
                      GatewayをS3バケットに保存してあるjsファイルのajaxからコールする。
                    </Item>
                    <Item>
                      API GatewayのPOSTメソッドからLambda関数をコール。
                    </Item>
                    <Item>
                      Lambda関数とSESを連携しお問い合わせ内容をSESでメール通知する構成。
                    </Item>
                    <Item>お問い合わせ内容をSESからメール通知。</Item>
                    <Item>
                      GitHubのリモートリポジトリにpushした際に、S3バケットにファイルをアップロード。また、アップロード完了後CloudFrontのキャッシュをクリアする。
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
