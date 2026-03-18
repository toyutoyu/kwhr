import { DefineColor } from "@/theme/color";
import { DefineSpacing } from "@/theme/spacing";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
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

  useEffect(() => {
    if (open) {
      setPadding(DefineSpacing.M);
    } else {
      setMaxHeight(0);
    }
  }, [open]);

  // paddingが適用されたDOMを基に高さを測定する
  useLayoutEffect(() => {
    if (open && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [padding, open]);

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
