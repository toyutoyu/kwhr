import SkillBox from "@/components/box/SkillBox";
import Stack from "@/components/stack/Stack";
import useScroll from "@/hook/useScroll";
import skills from "@/json/skill.json";

export default function SkillSectionContent() {
  const { setLastElement, isVisible } = useScroll();
  return (
    <Stack
      space="M"
      justifyContent="center"
      alignItems="center"
      ref={setLastElement}
    >
      {Object.entries(skills).map(([key, value], index) => (
        <SkillBox
          title={key}
          contents={value}
          isVisible={isVisible}
          style={{ transitionDelay: `${index * 0.2}s` }}
          key={key}
        />
      ))}
    </Stack>
  );
}
