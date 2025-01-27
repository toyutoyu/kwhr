import { DefineColor } from "@/theme/Color";
import styled from "styled-components";

type Props = {
  rate: number;
};

const StyledRate = styled.span<{ rate: number }>`
  position: relative;
  display: inline-block;
  width: 120px; /* 星5個分の幅 */
  height: 20px; /* 星の高さ */
  font-size: 20px; /* 星のサイズ */
  letter-spacing: 5px;

  &::before,
  &::after {
    position: absolute;
    display: inline-block;
    height: 20px;
    white-space: nowrap;
    overflow: hidden;
    content: "★★★★★"; /* 星5個分 */
    line-height: 20px;
    font-size: 20px;
  }

  &::before {
    color: #c4c4c4; /* 背景の星（グレー） */
    width: 100%; /* 常に5個分の幅 */
  }

  &::after {
    color: ${DefineColor.black}; /* 評価の星の色 */
    width: ${({ rate }) => `calc(${rate} / 5 * 100%)`}; /* 評価に応じた幅 */
  }
`;

export default function StarRate({ rate }: Props) {
  return <StyledRate rate={rate} />;
}
