import { ReactNode } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
`;

type Props = {
  id: string;
  children: ReactNode;
};

export default function Section({ id, children }: Props) {
  return <StyledSection id={id}>{children}</StyledSection>;
}
