import { DefineColor } from "@/theme/color";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { DefineShadow } from "@/theme/shadow";
import { DefineSpacing } from "@/theme/spacing";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import AcordionMenu from "../menu/AcordionMenu";
import Rate from "../rating/Rate";
import Stack from "../stack/Stack";
import Box from "./Box";

type Content = {
  logo: string;
  name: string;
  rate: number;
  description: string;
};

type Props = {
  title: string;
  contents: Array<Content>;
  style?: React.CSSProperties;
  isVisible: boolean;
};
const StyledBoxWrapper = styled.div<{ isVisible: boolean }>`
  max-width: 800px;
  width: 100%;
  box-shadow: ${DefineShadow.LEVEL4};
  transition: transform 500ms ease;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(-2000px)"};
`;

const StyledHead = styled.div`
  background-color: ${DefineColor.black};
  width: 100%;
  padding: ${DefineSpacing.XXS} ${DefineSpacing.S};

  @media screen and (min-width: ${MediaSize.S}) {
    padding: ${DefineSpacing.L} ${DefineSpacing.M};
  }
`;
const StyledTitle = styled.h3`
  color: ${DefineColor.black};
  font-size: ${DefineFontSize.L};
  font-weight: 600;
  color: ${DefineColor.white};
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.XXL};
  }
`;

const StyledInnerBox = styled.div`
  display: flex;
  padding: 16px 20px;
  width: 100%;
  @media screen and (min-width: ${MediaSize.S}) {
    padding: 20px 40px;
    width: 360px;
  }
`;

const StyledSkillTitle = styled.p`
  font-weight: bold;
  font-size: ${DefineFontSize.M};

  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.L};
  }
`;

const StyledSkillDescription = styled.p`
  font-size: ${DefineFontSize.XS};
  font-family: var(--font-notojp);
  letter-spacing: 0.075rem;
  line-height: 1.25;
  color: ${DefineColor.GRAY_700};
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
  }
`;

const StyledImage = styled.div`
  width: 48px;
  height: 48px;
  @media screen and (min-width: ${MediaSize.S}) {
    width: 60px;
    height: 60px;
  }
`;

export default function SkillBox({ title, contents, style, isVisible }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <StyledBoxWrapper style={style} isVisible={isVisible}>
      <StyledHead>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <StyledTitle>{title}</StyledTitle>
          <AcordionMenu
            open={open}
            onOpen={() => setOpen(!open)}
            isBlack={false}
          />{" "}
        </Stack>
      </StyledHead>
      <Box open={open}>
        {contents.map((content) => (
          <StyledInnerBox key={content.name}>
            <Stack direction="row" alignItems="flex-start" space="L">
              <StyledImage>
                <Image
                  src={content.logo}
                  alt={content.name}
                  width={60}
                  height={60}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </StyledImage>
              <Stack space="XS">
                <StyledSkillTitle>{content.name}</StyledSkillTitle>
                <Rate rate={content.rate} />
                <StyledSkillDescription>
                  {content.description}
                </StyledSkillDescription>
              </Stack>
            </Stack>
          </StyledInnerBox>
        ))}
      </Box>
    </StyledBoxWrapper>
  );
}
