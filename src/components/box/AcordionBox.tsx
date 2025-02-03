import { DefineColor } from "@/theme/color";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { DefineShadow } from "@/theme/shadow";
import { DefineSpacing } from "@/theme/spacing";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import AcordionMenu from "../menu/AcordionMenu";
import Stack from "../stack/Stack";
import Box from "./Box";

type Props = {
  title: string;
  children: ReactNode;
};
const StyledBoxWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  box-shadow: ${DefineShadow.LEVEL2};
  letter-spacing: 0.05em;
`;

const StyledHead = styled.div`
  background-color: ${DefineColor.white};
  width: 100%;
  padding: ${DefineSpacing.XXS} ${DefineSpacing.S};
  border: 1px solid black;

  @media screen and (min-width: ${MediaSize.S}) {
    padding: ${DefineSpacing.L} ${DefineSpacing.M};
  }
`;
const StyledTitle = styled.h3`
  color: ${DefineColor.black};
  font-size: ${DefineFontSize.L};
  font-weight: 600;
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.XXL};
  }
`;

export default function AcordionBox({ title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <StyledBoxWrapper>
      <StyledHead>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <StyledTitle>{title}</StyledTitle>
          <AcordionMenu open={open} onOpen={() => setOpen(!open)} />
        </Stack>
      </StyledHead>
      <Box open={open}>{children}</Box>
    </StyledBoxWrapper>
  );
}
