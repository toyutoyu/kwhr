import { DefineFontSize } from "@/theme/fontSize";
import { DefineSpacing } from "@/theme/spacing";
import { ReactNode } from "react";
import styled from "styled-components";

const TypingWrapper = styled.div`
  position: absolute;
  top: 0;
  font-size: 11px;
  font-family: var(--font-notojp);
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1.2px;
  line-height: 20px;
  width: 100%;
  animation: fadeIn 2s ease-in;
  padding: ${DefineSpacing.L};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Bubble = styled.div`
  position: relative;
  width: 100%;
  height: 394px;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("/images/background/bubble_frame_sf.svg");
    background-repeat: no-repeat;
  }
`;

export default function TypingText() {
  return (
    <>
      <Bubble>
        <TypingWrapper>
          <p>はじめまして！</p>
          <p>
            　川原雄人(かわはらゆうと)と申します。新卒でIT企業に就職し、SE/PGとして主に家電製品などの組み込み開発に約4年間携わりました。
          </p>
          <p>
            　その後、WEBエンジニアになるべく独学をスタートし、現在ではWEBエンジニアとして主にUI・UX設計やフロントエンドをメインで担当しています。アニメーションにも興味があり日々技術習得中です。
          </p>
          <p>
            　本ポートフォリオサイトは、私の現在のITスキルや経験内容を見える化してまとめたいと考えフルスクラッチ開発しました。3ヶ月毎にスキル棚卸しのためにサイト更新しています。
          </p>
        </TypingWrapper>
      </Bubble>
    </>
  );
}
