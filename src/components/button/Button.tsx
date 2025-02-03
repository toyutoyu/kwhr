import { DefineSpacing } from "@/theme/spacing";
import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const StyledButton = styled.button`
  padding: ${DefineSpacing.S} ${DefineSpacing.M};
  background: black;
  color: white;

  transition: all 150ms linear;
  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
`;
export default function Button({ children, onClick }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
