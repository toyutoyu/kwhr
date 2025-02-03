import { DefineFontSize } from "@/theme/fontSize";
import { DefineSpacing } from "@/theme/spacing";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: ${DefineSpacing.S};
  border-top: 1px solid black;
  text-align: center;
  font-size: ${DefineFontSize.XS};
  color: white;
  background-color: black;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>©️YUTO KAWAHARA. All Rights Reserved.</p>
    </StyledFooter>
  );
}
