import Section from "@/components/section/Section";
import SectionTitle from "../../../components/section/SectionTitle";
import styled from "styled-components";
import Image from "next/image";
import { DefineColor } from "@/theme/color";
import {
  StyledInnerSection,
  StyledSectionBlueShapeBackground,
} from "@/components/section/style/Style";
import Stack from "../../../components/stack/Stack";
import { MediaSize } from "@/theme/mediaSize";
import ProfileTable from "../../../components/table/ProfileTable";
import TypingText from "@/components/animation/TypingText";

const StyledProfileWrapper = styled.div`
  position: relative;
  color: ${DefineColor.white};
  &:before {
    content: "";
    position: absolute;
    border-right: 5px solid ${DefineColor.white};
    height: 100%;
    left: -20px;
  }
`;

const StyledName = styled.h2`
  font-family: var(--font-makinas4);
  font-size: 36px;

  @media screen and (min-width: ${MediaSize.S}) {
    font-size: 40px;
  }
`;
const StyledRomeName = styled.h3`
  font-size: 23px;
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: 25px;
  }
`;

const StyledCassetteTape = styled.div`
  position: relative;
  top: -100px;
  left: 0;
  z-index: 10;
  transform: rotate(-10.49deg);
`;

const SelfIntroductionWrapper = styled.div``;

export default function ProfileSection() {
  return (
    <Section id="profile">
      <SectionTitle odd>PROFILE</SectionTitle>
      <StyledInnerSection>
        <Stack direction={"row"} alignItems="center" justifyContent="center">
          <Stack alignItems="center" justifyContent="center">
            <SelfIntroductionWrapper>
              <TypingText />
              <StyledCassetteTape>
                <Image
                  src="/apng/ラジカセ.png"
                  alt=""
                  width={320}
                  height={320}
                />
              </StyledCassetteTape>
            </SelfIntroductionWrapper>

            <StyledProfileWrapper>
              <Stack>
                <StyledName>川原 雄人</StyledName>
                <StyledRomeName>Kawahara Yuto</StyledRomeName>
              </Stack>
              <ProfileTable />
            </StyledProfileWrapper>
          </Stack>
          {/* <div
              style={{
                backgroundColor: "transparent",
                height: "564px",
                position: "relative",
                width: "640px",
              }}
            >
              <Image
                src="/images/background/bubble_frame.svg"
                alt="吹き出し"
                width="280"
                height="283"
              />

              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  height: "547px",
                  justifyContent: "center",
                  left: "171px",
                  overflow: "hidden",
                  padding: "30px 40px",
                  position: "absolute",
                  top: "8px",
                  width: "469px",
                }}
              >
                <p
                  style={{
                    whiteSpace: "pre-wrap",
                    fontFamily: "var(--font-notojp)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    letterSpacing: "1.60px",
                    lineHeight: "28px",
                  }}
                >
                  はじめまして！
                  <br />
                  　川原雄人(かわはら
                  ゆうと)と申します。新卒でIT企業に就職し、SE/PGとして主に家電製品などの組み込み開発に約4年間携わりました。
                  <br />
                  　その後、WEBエンジニアになるべく独学をスタートし、現在ではWEBエンジニアとして主にUI・UX設計やフロントエンドをメインで担当しています。アニメーションにも興味があり日々技術習得中です。
                  <br />
                  　本ポートフォリオサイトは、私の現在のITスキルや経験内容を見える化してまとめたいと考えフルスクラッチ開発しました。3ヶ月毎にスキル棚卸しのためにサイト更新しています。
                </p>
              </div>
            </div> */}
        </Stack>
      </StyledInnerSection>
    </Section>
  );
}
