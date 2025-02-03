import Bubble from "@/components/bubble/Bubble";
import Section from "@/components/section/Section";
import Stack from "@/components/stack/Stack";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { DefineSpacing } from "@/theme/spacing";
import Image from "next/image";
import styled from "styled-components";
import SectionTitle from "../../../components/section/SectionTitle";

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 24px;
`;

const StyledProfileInner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledProfileAvatar = styled.div`
  height: 160px;
  width: 160px;
  background-image: url("/images/self-image.png");
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (min-width: ${MediaSize.S}) {
    height: 200px;
    width: 200px;
  }
`;

const StyledSelfIntroduction = styled.p`
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.S};
  font-weight: 200;
  letter-spacing: 0.125rem;
  line-height: 1.5rem;
  white-space: pre-wrap;
  text-align: center;
  width: 100%;
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
  }
`;

const ProfileName = styled.h1`
  font-family: var(--font-makinas4);
  font-size: ${DefineFontSize.XXL};
`;
const ProfileRomeName = styled.h3`
  font-size: ${DefineFontSize.XS};
`;

const Table = styled.table`
  font-family: var(--font-makinas4);
`;
const Th = styled.th`
  padding: ${DefineSpacing.XS} ${DefineSpacing.S};
`;
const Td = styled.td`
  padding: ${DefineSpacing.XS} ${DefineSpacing.S};
`;

export default function ProfileSection() {
  return (
    <Section id="profile">
      <SectionTitle odd>PROFILE</SectionTitle>
      <StyledProfile>
        <StyledProfileInner>
          <Stack alignItems="center" justifyContent="center" space="L">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              space="XS"
            >
              <StyledProfileAvatar />
              <Image
                src="/images/QRcode.svg"
                alt="QRコード"
                width={150}
                height={150}
              />
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              <ProfileName>川原 雄人</ProfileName>
              <ProfileRomeName>Kawahara</ProfileRomeName>
            </Stack>

            <Table>
              <tr>
                <Th>生年月日</Th>
                <Td>1994/11/4</Td>
              </tr>
              <tr>
                <Th>出身地</Th>
                <Td>大阪</Td>
              </tr>
              <tr>
                <Th>趣味</Th>
                <Td>登山/ボードゲーム/カラオケ</Td>
              </tr>
            </Table>
          </Stack>
          <Bubble>
            <StyledSelfIntroduction>
              {`はじめまして！\n　川原雄人(かわはら　ゆうと)と申します。新卒でIT企業に就職し、SE/PGとして主に家電製品などの組み込み開発に約4年間携わりました。\n　その後、WEBエンジニアになるべく独学をスタートし、現在ではWEBエンジニアとして主にUI・UX設計やフロントエンドをメインで担当しています。\n　アニメーションにも興味があり日々技術習得中です。本ポートフォリオサイトは、私の現在のITスキルや経験内容を見える化してまとめたいと考えフルスクラッチ開発しました。\n3ヶ月毎にスキル棚卸しのためにサイト更新予定です。`}
            </StyledSelfIntroduction>
          </Bubble>
        </StyledProfileInner>
      </StyledProfile>
    </Section>
  );
}
