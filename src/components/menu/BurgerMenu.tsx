import { DefineColor } from "@/theme/color";
import { MediaSize } from "@/theme/mediaSize";
import { DefineShadow } from "@/theme/shadow";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Stack from "../stack/Stack";

export const BurgerMenu = styled.button<{ open: boolean }>`
  position: relative;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;

  &::before,
  &::after,
  span {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px; /* 線の太さ */
    background: black;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: 4px;
    transform: ${({ open }) =>
      open ? "translateY(10px) rotate(45deg)" : "none"};
  }

  /* 中央の線 (span) */
  span {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  &::after {
    bottom: 4px;
    transform: ${({ open }) =>
      open ? "translateY(-10px) rotate(-45deg)" : "none"};
  }
`;

const MenuWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  top: 60px;
  right: 0;
  width: 200px;
  background: ${DefineColor.white};
  box-shadow: ${DefineShadow.LEVEL3};
  padding: 16px;
  opacity: ${({ open }) => (open ? "1" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: all 250ms ease-in-out;
  @media screen and (min-width: ${MediaSize.S}) {
    display: none;
  }
`;

const StyledBurgerMenu = styled.div`
  background-color: white;
  height: 44px;
  padding: 8px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${MediaSize.S}) {
    display: none;
  }
`;

const Ul = styled.ul``;

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurgerMenu>
        <BurgerMenu open={open} onClick={() => setOpen(!open)}>
          <span />
        </BurgerMenu>
      </StyledBurgerMenu>

      <MenuWrapper open={open}>
        <Ul>
          <Stack space="M">
            <li>
              <Link href="/#profile" onClick={() => setOpen(false)}>
                PROFILE
              </Link>
            </li>
            <li>
              <Link href="/#skill" onClick={() => setOpen(false)}>
                SKILL
              </Link>
            </li>
            <li>
              <Link href="/#gallery" onClick={() => setOpen(false)}>
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="/#works" onClick={() => setOpen(false)}>
                WORKS
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setOpen(false)}>
                CONTACT
              </Link>
            </li>
          </Stack>
        </Ul>
      </MenuWrapper>
    </>
  );
}
