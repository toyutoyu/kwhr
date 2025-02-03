import { DefineColor } from "@/theme/color";
import { MediaSize } from "@/theme/mediaSize";
import styled from "styled-components";

type Props = {
  rate: number;
};

const Size = {
  S: "16px",
  M: "20px",
  L: "28px",
};

const StyledRate = styled.span<{ rate: number }>`
  position: relative;
  display: inline-block;
  width: 100%;
  height: ${Size.S}; /* 星の高さ */
  font-size: ${Size.S}; /* 星のサイズ */
  letter-spacing: 4px;

  @media screen and (min-width: ${MediaSize.S}) {
    height: ${Size.M}; /* 星の高さ */
    font-size: ${Size.M}; /* 星のサイズ */
  }

  &::before,
  &::after {
    position: absolute;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    content: "★★★★★"; /* 星5個分 */
    height: ${Size.S};
    line-height: ${Size.S};

    @media screen and (min-width: ${MediaSize.S}) {
      height: ${Size.M}; /* 星の高さ */
      line-height: ${Size.M};
    }
  }

  &::before {
    color: ${DefineColor.GRAY_300}; /* 背景の星（グレー） */
    width: 100%; /* 常に5個分の幅 */
  }

  &::after {
    color: ${DefineColor.black}; /* 評価の星の色 */
    width: ${({ rate }) => `calc(${rate} * ${Size.S})`}; /* 評価に応じた幅 */
    @media screen and (min-width: ${MediaSize.S}) {
      width: ${({ rate }) =>
        `calc(${rate} * ${Size.M} + (${rate} * 3.5px) )`}; /* 評価に応じた幅 */
    }
  }
`;

export default function Rate({ rate }: Props) {
  return <StyledRate rate={rate} />;
}
