import AcordionBox from "@/components/box/AcordionBox";
import Section from "@/components/section/Section";
import { StyledInnerSection } from "@/components/section/style/Style";
import Stack from "@/components/stack/Stack";
import WorkHistoryTable from "@/components/table/WorkHistoryTable";
import works from "@/json/works.json";
import SectionTitle from "../../../components/section/SectionTitle";

export default function WorksSection() {
  console.log({ works });
  return (
    <Section id="works">
      <SectionTitle odd>WORKS</SectionTitle>
      <StyledInnerSection>
        <Stack space="M" alignItems="center" justifyContent="center">
          {Object.entries(works)
            .sort(([a], [b]) => {
              const numA = parseInt(a.split(" - ")[0], 10); // "2017 - 2021" → 2017
              const numB = parseInt(b.split(" - ")[0], 10); // "2022" → 2022
              return numA - numB;
            })
            .map(([year, projectList]) => (
              <AcordionBox title={year} key={year}>
                <Stack space="M">
                  {projectList.map((project) => (
                    <WorkHistoryTable
                      projectName={project.projectName}
                      overview={project.overview}
                      environment={project.environment}
                      inCharge={project.inCharge}
                      key={project.projectName}
                    />
                  ))}
                </Stack>
              </AcordionBox>
            ))}
        </Stack>
      </StyledInnerSection>
    </Section>
  );
}
