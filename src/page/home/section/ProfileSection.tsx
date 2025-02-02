import Section from "@/components/section/Section";
import { DefineColor } from "@/theme/color";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import styled from "styled-components";
import SectionTitle from "../../../components/section/SectionTitle";

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  background-color: ${DefineColor.GRAY_100};
  width: 100%;
  padding: 48px 64px;
`;

const StyledProfileInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
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
    height: 240px;
    width: 240px;
  }
`;

const StyledSelfIntroduction = styled.p`
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.S};
  letter-spacing: 0.075rem;
  line-height: 1.2;
  white-space: pre-wrap;
  text-align: left;
  width: 100%;
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
  }
`;

export default function ProfileSection() {
  return (
    <Section id="profile">
      <SectionTitle odd>PROFILE</SectionTitle>
      <StyledProfile>
        <StyledProfileInner>
          <div>
            <StyledProfileAvatar />
            <h1>川原 雄人</h1>
            <table>
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
                <td>登山/ボードゲーム/カラオケ</td>
              </tr>
            </table>
          </div>
          <StyledSelfIntroduction>
            {`はじめまして！\n　川原雄人(かわはら　ゆうと)と申します。新卒でIT企業に就職し、SE/PGとして主に家電製品などの組み込み開発に約4年間携わりました。\n　その後、WEBエンジニアになるべく独学をスタートし、現在ではWEBエンジニアとして主にUI・UX設計やフロントエンドをメインで担当しています。\n　アニメーションにも興味があり日々技術習得中です。本ポートフォリオサイトは、私の現在のITスキルや経験内容を見える化してまとめたいと考えフルスクラッチ開発しました。3ヶ月毎にスキル棚卸しのためにサイト更新しています。`}
          </StyledSelfIntroduction>
        </StyledProfileInner>
      </StyledProfile>
    </Section>
  );
}
