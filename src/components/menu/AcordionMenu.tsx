import styled from "styled-components";

export const Menu = styled.button<{ open: boolean }>`
  position: relative;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px; /* 線の太さ */
    background: black;
    transition: all 0.3s ease-in-out;
  }

  &::after {
    transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(90deg)")};
  }
`;

const StyledAcordionMenu = styled.div`
  background-color: white;
  height: 44px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  open: boolean;
  onOpen: () => void;
};

export default function AcordionMenu({ open, onOpen }: Props) {
  return (
    <>
      <StyledAcordionMenu>
        <Menu open={open} onClick={onOpen} />
      </StyledAcordionMenu>
    </>
  );
}
