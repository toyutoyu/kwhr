import AcordionBox from "@/components/box/AcordionBox";
import Stack from "@/components/stack/Stack";
import WorkHistoryTable from "@/components/table/WorkHistoryTable";
import useScroll from "@/hook/useScroll";
import works from "@/json/works.json";

export default function WorksSectionContent() {
  const { setLastElement, isVisible } = useScroll();
  return (
    <Stack
      space="M"
      alignItems="center"
      justifyContent="center"
      ref={setLastElement}
    >
      {Object.entries(works)
        .sort(([a], [b]) => {
          const numA = parseInt(a.split(" - ")[0], 10); // "2017 - 2021" → 2017
          const numB = parseInt(b.split(" - ")[0], 10); // "2022" → 2022
          return numA - numB;
        })
        .map(([year, projectList], index) => (
          <AcordionBox
            title={year}
            key={year}
            isVisible={isVisible}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
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
  );
}
