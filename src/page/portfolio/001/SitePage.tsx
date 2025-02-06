"use client";

import SectionTitle from "@/components/section/SectionTitle";
import Stack from "@/components/stack/Stack";
import Text from "@/components/text/Text";
import Image from "next/image";
import styled from "styled-components";
const StyledInfraImage = styled.div`
  max-width: 600px;
  width: 100%;
`;

export default function SitePage() {
  return (
    <>
      <Stack justifyContent="center" alignItems="center" space="XXL">
        <SectionTitle odd>OVERVIEW</SectionTitle>
        <Text>
          ポートフォリオ用サイトです。現在のITスキルなどをまとめております。
          レスポンシブ対応済みで、PC/タブレット/スマートフォンからアクセス可能です。
        </Text>
        <StyledInfraImage>
          <Image
            src="/images/top.png"
            alt="トップ画像"
            width={841}
            height={453}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </StyledInfraImage>

        <SectionTitle>DIAGRAM</SectionTitle>

        <StyledInfraImage>
          <Image
            src="/images/portfolio/portfolio.drawio.png"
            alt="インフラ構成図"
            width={841}
            height={453}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </StyledInfraImage>
      </Stack>
    </>
  );
}
