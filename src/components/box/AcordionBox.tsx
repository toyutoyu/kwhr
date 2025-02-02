import { DefineColor } from "@/theme/color";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { DefineShadow } from "@/theme/shadow";
import { DefineSpacing } from "@/theme/spacing";
import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AcordionMenu from "../menu/AcordionMenu";
import Stack from "../stack/Stack";

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

const StyledBox = styled.div<{ open: boolean; maxHeight: number }>`
  background-color: ${DefineColor.white};
  padding: ${DefineSpacing.M};
  width: 100%;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: flex-start;
  border-bottom: ${({ open }) => (open ? "1px solid black" : "0")};
  border-left: 1px solid black;
  border-right: 1px solid black;
  overflow: hidden;
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  transition: max-height 300ms ease-in-out;
`;

export default function AcordionBox({ title, children }: Props) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (open && contentRef.current) {
      setMaxHeight(contentRef.current?.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [open, contentRef]);
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
      <StyledBox ref={contentRef} open={open} maxHeight={maxHeight}>
        {children}
      </StyledBox>
    </StyledBoxWrapper>
  );
}
