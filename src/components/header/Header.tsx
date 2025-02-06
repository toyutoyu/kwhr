"use client";
import { MediaSize } from "@/theme/mediaSize";
import { DefineSpacing } from "@/theme/spacing";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import HamburgerMenu from "../menu/BurgerMenu";
import Stack from "../stack/Stack";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${DefineSpacing.XS} ${DefineSpacing.S};
  background-color: white;
  height: 44px;
  border-bottom: 1px solid black;
  @media screen and (min-width: ${MediaSize.S}) {
    padding: ${DefineSpacing.S} ${DefineSpacing.M};
    height: 52px;
  }
`;

const StyledNav = styled.nav`
  display: none;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  @media screen and (min-width: ${MediaSize.S}) {
    display: flex;
  }
`;
const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledList = styled.li`
  margin-left: 32px;
  &:first-child {
    margin: 0;
  }
`;
const StyledAnchor = styled.a`
  transition: all 350ms ease-in-out;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px; /* ボーダーの太さ */
    background-color: #000; /* ボーダーの色 */
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`;

const headerItems = [
  {
    title: "PROFILE",
    href: "/#profile",
  },
  {
    title: "SKILL",
    href: "/#skill",
  },
  {
    title: "GALLERY",
    href: "/#gallery",
  },
  {
    title: "WORKS",
    href: "/#works",
  },
  {
    title: "CONTACT",
    href: "/#contact",
  },
];

const SiteTitle = styled.h1`
  font-size: 22px;
  color: black;
  font-weight: 700;
`;
export default function Header() {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <Link href="/">
          <Stack direction="row" alignItems="center" space="XXS">
            <Image
              src="/images/k_cube.svg"
              alt="kwhr-portfolio"
              width={32}
              height={32}
            />
            <SiteTitle>KWHR</SiteTitle>
          </Stack>
        </Link>
        <StyledNav>
          <StyledUl>
            {headerItems.map((item, index) => (
              <StyledList key={`header-item-${index}`}>
                <StyledAnchor>
                  <Link href={item.href}>{item.title}</Link>
                </StyledAnchor>
              </StyledList>
            ))}
          </StyledUl>
        </StyledNav>
      </StyledHeader>
      <HamburgerMenu />
    </StyledHeaderWrapper>
  );
}
