import { DefineColor } from "@/theme/color";
import { MediaSize } from "@/theme/mediaSize";
import { useState } from "react";
import styled from "styled-components";

const BurgerMenu = styled.button<{ open: boolean }>`
  position: relative;
  width: 35px;
  height: 30px;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  @media screen and (min-width: ${MediaSize.S}) {
    display: none;
  }

  span,
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 6px;
    background: ${({ open }) =>
      open ? `${DefineColor.white}` : `${DefineColor.black}`};
    transition: all 0.3s ease-in-out;
  }
  span {
    top: 0px;
    width: 100%;
  }

  &::before {
    width: 25px;
    top: 12px;
  }

  &::after {
    width: 15px;
    top: 24px;
  }
`;

const MenuWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  top: 60px;
  right: 0;
  width: 200px;
  background: ${DefineColor.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 16px;
  display: ${({ open }) => (open ? "block" : "none")};
`;

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <span />
      </BurgerMenu>
      <MenuWrapper open={open}>
        <ul>
          <li>ホーム</li>
          <li>サービス</li>
          <li>お問い合わせ</li>
        </ul>
      </MenuWrapper>
    </>
  );
}
