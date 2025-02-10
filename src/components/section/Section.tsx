import { ReactNode, forwardRef } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  margin-bottom: 80px;
`;

type Props = {
  id: string;
  children: ReactNode;
};

const Section = forwardRef<HTMLElement, Props>(
  ({ id, children }: Props, ref) => {
    return (
      <StyledSection id={id} ref={ref}>
        {children}
      </StyledSection>
    );
  }
);

export default Section;
Section.displayName = "Section";
