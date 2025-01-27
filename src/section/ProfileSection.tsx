import Section from "@/components/section/Section";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import Image from "next/image";
import { DefineColor } from "@/theme/Color";
import {
  StyledInnerSection,
  StyledSectionBlueShapeBackground,
} from "@/components/section/style/Style";

const StyledProfileWrapper = styled.div`
  position: relative;
  color: ${DefineColor.white};
  top: -50px;
  left: 50px;
  &:before {
    content: "";
    position: absolute;
    border-right: 5px solid ${DefineColor.white};
    height: 100%;
    left: -20px;
  }
`;

export default function ProfileSection() {
  return (
    <Section id="profile">
      <StyledSectionBlueShapeBackground>
        <StyledInnerSection>
          <SectionTitle odd>PROFILE</SectionTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/apng/ラジカセ.png"
                alt=""
                width={500}
                height={500}
                style={{
                  position: "relative",
                  zIndex: 10,
                  transform: "rotate(-10.49deg)",
                }}
              />
              <StyledProfileWrapper>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-makinas4)",
                      fontSize: "40px",
                    }}
                  >
                    川原 雄人
                  </p>
                  <p style={{ fontSize: "25px" }}>Kawahara Yuto</p>
                </div>
                <table
                  style={{
                    fontFamily: "var(--font-makinas4)",
                    marginTop: "40px",
                  }}
                >
                  <tr>
                    <th>生年月日</th>
                    <td>1994/11/4</td>
                  </tr>
                  <tr>
                    <th>出身地</th>
                    <td>大阪</td>
                  </tr>
                  <tr>
                    <th>趣味</th>
                    <td>登山・ボードゲーム・カラオケ</td>
                  </tr>
                </table>
              </StyledProfileWrapper>
            </div>
            <div
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
                width="640"
                height="564"
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
            </div>
          </div>
        </StyledInnerSection>
      </StyledSectionBlueShapeBackground>
    </Section>
  );
}
