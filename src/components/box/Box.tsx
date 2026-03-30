import { DefineColor } from "@/theme/color";
import { DefineSpacing } from "@/theme/spacing";
import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledOuter = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "maxHeight",
})<{ maxHeight: number }>`
  width: 100%;
  overflow: hidden;
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  transition: max-height 300ms ease-in-out;
  border-bottom: ${({ maxHeight }) => (maxHeight > 0 ? "1px solid #222" : "0")};
  border-left: 1px solid #222;
  border-right: 1px solid #222;
`;

const StyledInner = styled.div`
  background-color: ${DefineColor.white};
  padding: ${DefineSpacing.M};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

type Props = {
  open: boolean;
  children: ReactNode;
};

export default function Box({ open, children }: Props) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (open && innerRef.current) {
      setMaxHeight(innerRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [open]);

  return (
    <StyledOuter maxHeight={maxHeight}>
      <StyledInner ref={innerRef}>{children}</StyledInner>
    </StyledOuter>
  );
}
