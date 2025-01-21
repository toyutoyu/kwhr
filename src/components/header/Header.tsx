"use client";
import Image from "next/image";
import styled from "styled-components";
import logo from "../../../public/images/logo.svg";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 1000;
  padding: 12px 16px;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const headerItems = [
  {
    title: "PROFILE",
    href: "#profile",
  },
  {
    title: "SKILL",
    href: "#skill",
  },
  {
    title: "WORKS",
    href: "#works",
  },
  {
    title: "CONTACT",
    href: "#contact",
  },
];

export default function Header() {
  return (
    <StyledHeader>
      <Image src={logo} alt="ロゴ" height={28} />
      <StyledNav>
        <StyledUl>
          {headerItems.map((item, index) => (
            <StyledList key={`header-item-${index}`}>
              <StyledAnchor href={item.href}>{item.title}</StyledAnchor>
            </StyledList>
          ))}
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}
