import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { DefineSpacing } from "@/theme/spacing";
import styled from "styled-components";

const Th = styled.th`
  width: 20%;
  padding: ${DefineSpacing.S} ${DefineSpacing.XS};
  background-color: black;
  color: white;
  white-space: nowrap;
  border: 1px solid black;
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.XS};
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
  }
`;
const Td = styled.td`
  width: 80%;
  padding: ${DefineSpacing.S} ${DefineSpacing.XS};
  border: 1px solid black;
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.XS};
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
  }
`;

type Props = {
  projectName: string;
  overview: string;
  environment: string;
  inCharge: string;
};

export default function WorkHistoryTable({
  projectName,
  overview,
  environment,
  inCharge,
}: Props) {
  return (
    <table>
      <tr>
        <Th>プロジェクト名</Th>
        <Td>{projectName}</Td>
      </tr>
      <tr>
        <Th>概要</Th>
        <Td>{overview}</Td>
      </tr>
      <tr>
        <Th>開発環境</Th>
        <Td>{environment}</Td>
      </tr>
      <tr>
        <Th>担当</Th>
        <Td>{inCharge}</Td>
      </tr>
    </table>
  );
}
