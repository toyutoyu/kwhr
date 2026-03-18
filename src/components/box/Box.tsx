import { DefineColor } from "@/theme/color";
import { DefineSpacing } from "@/theme/spacing";
import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledBox = styled.div<{ maxHeight: number; padding: string }>`
  background-color: ${DefineColor.white};
  padding: ${({ padding }) => padding};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-bottom: ${({ maxHeight }) => (maxHeight > 0 ? "1px solid black" : "0")};
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
  const [padding, setPadding] = useState("0");

  const paddingPx = parseInt(DefineSpacing.M) * 2;

  useEffect(() => {
    if (open && contentRef.current) {
      setPadding(DefineSpacing.M);
      setMaxHeight(contentRef.current.scrollHeight + paddingPx);
    } else {
      setMaxHeight(0);
    }
  }, [open]);

  return (
    <StyledBox
      ref={contentRef}
      maxHeight={maxHeight}
      padding={padding}
      onTransitionEnd={() => {
        if (!open) setPadding("0");
      }}
    >
      {children}
    </StyledBox>
  );
}
