import { DefineColor } from "@/theme/Color";
import { DefineSpacing } from "@/theme/spacing";
import styled from "styled-components";

const StyledTable = styled.table`
  font-family: var(--font-makinas4);
  margin-top: 40px;
  color: ${DefineColor.white};
`;

const StyledTh = styled.th`
  padding: ${DefineSpacing.XS} 0;
  padding-right: ${DefineSpacing.M};
`;
const StyledTd = styled.td`
  padding: ${DefineSpacing.XS} 0;
`;

export default function ProfileTable() {
  return (
    <>
      <StyledTable>
        <tr>
          <StyledTh>生年月日</StyledTh>
          <StyledTd>1994/11/4</StyledTd>
        </tr>
        <tr>
          <StyledTh>出身地</StyledTh>
          <StyledTd>大阪</StyledTd>
        </tr>
        <tr>
          <StyledTh>趣味</StyledTh>
          <StyledTd>登山・ボードゲーム・カラオケ</StyledTd>
        </tr>
      </StyledTable>
    </>
  );
}
