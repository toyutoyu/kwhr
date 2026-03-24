"use client";
import Section from "@/components/section/Section";
import SectionTitle from "@/components/section/SectionTitle";
import { StyledInnerSection } from "@/components/section/style/Style";
import Stack from "@/components/stack/Stack";
import useScroll from "@/hook/useScroll";
import career from "@/json/career.json";
import { DefineColor } from "@/theme/color";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { DefineSpacing } from "@/theme/spacing";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
type Props = {
  odd?: boolean;
};

const StyledYearBox = styled.div<{ $lineHeight?: number; $top?: number }>`
  position: relative;
  background-color: ${DefineColor.black};
  padding: ${DefineSpacing.M};
  width: 200px;
  color: ${DefineColor.white};
  font-size: ${DefineFontSize.X3L};
  text-align: center;
  font-weight: bold;

  &::after {
    content: "";
    display: block;
    left: calc(50% - 0.5px);
    position: absolute;
    top: ${({ $top }) => $top}px;
    width: 1px;
    height: ${({ $lineHeight }) =>
      `calc(${$lineHeight}px + ${DefineSpacing.X3L})`};
    background-color: ${DefineColor.black};
  }

  @media (max-width: ${MediaSize.M}) {
    font-size: ${DefineFontSize.XL};
    width: 100px;
  }
`;

const StyledHistoryBox = styled.div<{ $isEven: boolean }>`
  position: relative;
  border: solid 1px ${DefineColor.black};
  padding: ${DefineSpacing.L};
  color: ${DefineColor.black};
  background-color: ${DefineColor.white};
  width: 500px;
  margin-bottom: ${DefineSpacing.L};
  z-index: 1;
  ${({ $isEven }) => ($isEven ? "left: -350px;" : "right: -350px;")}
  &::before {
    background-image: linear-gradient(
      90deg,
      ${DefineColor.black} 5px,
      transparent 0
    );
    background-repeat: repeat-x;
    background-size: 10px 1px;
    content: "";
    display: block;
    height: 1px;
    position: absolute;
    top: 50%;
    width: 100px;
    z-index: -1;
    ${({ $isEven }) => ($isEven ? "right: -100px;" : "left: -100px;")}
  }
  @media (max-width: ${MediaSize.M}) {
    left: auto;
    right: auto;
    width: 100%;
    &::before {
      display: none;
    }
  }
`;

const StyledCompanyName = styled.h4`
  color: ${DefineColor.black};
  font-weight: bold;
  font-size: ${DefineFontSize.XL};
`;

const StyledEmploymentType = styled.span`
  background-color: ${DefineColor.black};
  padding: ${DefineSpacing.XS};
  width: fit-content;
  color: ${DefineColor.white};
  font-size: ${DefineFontSize.S};
  text-align: center;
  white-space: nowrap;
`;

const StyledRole = styled.p`
  color: ${DefineColor.black};
  font-size: ${DefineFontSize.M};
  line-height: 1.5rem;
`;

const StyledDescritpion = styled.p`
  color: ${DefineColor.black};
  font-size: ${DefineFontSize.M};
  line-height: 1.5rem;
`;

const StyledCareerOutlook = styled.div`
  background-color: ${DefineColor.GRAY_100};
  padding: ${DefineSpacing.L};
  border: solid 1px ${DefineColor.black};
  width: 800px;
  position: relative;
  top: 20px;
  @media (max-width: ${MediaSize.M}) {
    width: 100%;
  }
`;

const StyledCareerOutlookTitle = styled.h5`
  color: ${DefineColor.black};
  font-size: ${DefineFontSize.XL};
  font-weight: bold;
`;

const StyledCareerOutlookDescription = styled.p`
  color: ${DefineColor.black};
  font-size: ${DefineFontSize.M};
  line-height: 1.5rem;
`;

export default function CareerSection({ odd = false }: Props) {
  const { setLastElement, isVisible } = useScroll();
  const { career: myCareer } = career;

  const groupedCareer = Array.from(
    myCareer
      .reduce((acc, item) => {
        if (!acc.has(item.year)) acc.set(item.year, []);
        acc.get(item.year)!.push(item);
        return acc;
      }, new Map<string, typeof myCareer>())
      .entries(),
  );

  const historyRefs = useRef<(HTMLDivElement | null)[][]>([]);
  const yearBoxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [yearHeights, setYearHeights] = useState<number[]>([]);
  const [lineHeights, setLineHeights] = useState<number[]>([]);

  useEffect(() => {
    setYearHeights(yearBoxRefs.current.map((ref) => ref?.offsetHeight ?? 0));
    setLineHeights(
      historyRefs.current.map((refs) =>
        refs.reduce((sum, ref) => sum + (ref?.offsetHeight ?? 0), 0),
      ),
    );
  }, [myCareer]);

  return (
    <Section id="career" ref={setLastElement}>
      <SectionTitle isVisible={isVisible} odd={odd}>
        CAREER
      </SectionTitle>
      <StyledInnerSection>
        <Stack>
          {groupedCareer.map(([year, careers], groupIndex) => (
            <Stack
              key={year}
              space="L"
              alignItems="center"
              justifyContent="center"
            >
              <StyledYearBox
                $lineHeight={lineHeights[groupIndex] ?? 0}
                $top={yearHeights[groupIndex] ?? 0}
                ref={(el) => {
                  yearBoxRefs.current[groupIndex] = el;
                }}
              >
                {year}
              </StyledYearBox>
              {careers.map((career, careerIndex) => (
                <StyledHistoryBox
                  key={careerIndex}
                  $isEven={groupIndex % 2 === 0}
                  ref={(el) => {
                    if (!historyRefs.current[groupIndex]) {
                      historyRefs.current[groupIndex] = [];
                    }
                    historyRefs.current[groupIndex][careerIndex] = el;
                  }}
                >
                  <Stack space="M">
                    <StyledCompanyName>{career.company}</StyledCompanyName>
                    <Stack direction="row" space="S" alignItems="baseline">
                      <StyledEmploymentType>
                        {career.employmentType}
                      </StyledEmploymentType>
                      <StyledRole>{career.role.join("・")}</StyledRole>
                    </Stack>
                    <StyledDescritpion>{career.description}</StyledDescritpion>
                  </Stack>
                </StyledHistoryBox>
              ))}
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Stack justifyContent="center" alignItems="center">
            <StyledYearBox $lineHeight={20}>2026</StyledYearBox>
            <StyledCareerOutlook>
              <Stack space="S">
                <StyledCareerOutlookTitle>
                  設計から実装までやり切るUI/UXデザイナーへ
                </StyledCareerOutlookTitle>
                <StyledCareerOutlookDescription>
                  UI/UXデザイナーとして、ユーザーが迷わず使え、自然に行動できる体験を提供していきたいと考えています。これまで設計から実装まで一貫して担ってきた経験を活かし、表層的なデザインに留まらず、情報設計や導線設計まで含めた体験設計を強化していきます。今後はユーザー体験と事業成果の両立を意識し、継続的な改善を通じてプロダクト価値の向上に貢献していきます。
                </StyledCareerOutlookDescription>
              </Stack>
            </StyledCareerOutlook>
          </Stack>
        </Stack>
      </StyledInnerSection>
    </Section>
  );
}
