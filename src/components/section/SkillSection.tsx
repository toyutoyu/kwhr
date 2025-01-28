"use client";
import Section from "@/components/section/Section";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import {
  StyledInnerSection,
  StyledSectionYelllowShapeBackground,
} from "@/components/section/style/Style";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import SkillRadarChart from "@/components/chart/SkillRadarChart";
ChartJS.register(ArcElement, Tooltip, Legend);
import skills from "@/json/skill.json";
import Image from "next/image";
import StarRate from "@/components/rating/StarRate";
import { DefineColor } from "@/theme/Color";
import Stack from "@/components/stack/Stack";
import { DefineFontSize } from "@/theme/fontSize";
export default function SkillSection() {
  const { ui } = skills;
  return (
    <Section id="skill">
      <StyledSectionYelllowShapeBackground>
        <SectionTitle>SKILL</SectionTitle>
        <StyledInnerSection>
          <SkillRadarChart />
          <div
            style={{
              backgroundColor: `${DefineColor.black}`,
              width: "100%",
              padding: "12px 20px",
            }}
          >
            <p
              style={{
                color: `${DefineColor.yellow}`,
                fontSize: `${DefineFontSize.X3L}`,
                fontWeight: "600",
              }}
            >
              UI/UX・Graphic
            </p>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: `${DefineColor.white}`,
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {ui.map((item) => (
              <div
                style={{
                  display: "flex",

                  padding: "20px 40px",
                  width: "400px",
                }}
              >
                <Stack direction="row" alignItems="flex-start" space="XL">
                  <div>
                    <Image
                      src={item.logo}
                      alt={item.skill}
                      width={60}
                      height={60}
                    />
                  </div>

                  <Stack space="XS">
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                      {item.skill}
                    </p>
                    <StarRate rate={item.rating} />
                    <p>{item.description}</p>
                  </Stack>
                </Stack>
              </div>
            ))}
          </div>
        </StyledInnerSection>
      </StyledSectionYelllowShapeBackground>
    </Section>
  );
}
