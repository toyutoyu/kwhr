import { MediaSize } from "@/theme/mediaSize";
import { DefineSpacing } from "@/theme/spacing";
import { ReactNode } from "react";
import styled from "styled-components";
import DotLoader from "../animation/DotLoader";

type Props = {
  type?: "button" | "submit";
  children: ReactNode;
  onClick?: () => void;
  loading?: boolean;
};

const StyledButton = styled.button`
  position: relative;
  padding: ${DefineSpacing.S} ${DefineSpacing.M};
  background: black;
  color: white;
  width: fit-content;
  box-sizing: border-box;
  transition: all 150ms linear;
  &:active {
    background: white;
    color: black;
    outline: 1px solid black;
    outline-offset: -1px;
  }
  @media screen and (min-width: ${MediaSize.S}) {
    &:hover {
      background: white;
      color: black;
      outline: 1px solid black;
      outline-offset: -1px;
    }
  }
`;

const StyledPlaceholder = styled.div<{ loading: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  visibility: ${({ loading }) => (loading ? "hidden" : "visible")};
`;

const StyledLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Button({
  type = "button",
  children,
  onClick,
  loading = false,
}: Props) {
  return (
    <StyledButton type={type} onClick={onClick}>
      <StyledPlaceholder loading={loading}>{children}</StyledPlaceholder>
      {loading && (
        <StyledLoaderWrapper>
          <DotLoader />
        </StyledLoaderWrapper>
      )}
    </StyledButton>
  );
}
