import { DefineSpacing } from "@/theme/spacing";
import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  type: "button" | "submit";
  children: ReactNode;
  onClick?: () => void;
};

const StyledButton = styled.button`
  padding: ${DefineSpacing.S} ${DefineSpacing.M};
  background: black;
  color: white;
  width: fit-content;

  transition: all 150ms linear;
  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
  }
`;
export default function Button({ type = "button", children, onClick }: Props) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
