import { DefineColor } from "@/theme/color";
import { DefineSpacing } from "@/theme/spacing";
import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
type Props = {
  open: boolean;
  children: ReactNode;
};
export default function Box({ open, children }: Props) {
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
    <StyledBox ref={contentRef} open={open} maxHeight={maxHeight}>
      {children}
    </StyledBox>
  );
}
