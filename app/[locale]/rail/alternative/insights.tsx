import { FeatureCard } from "@/app/components/feature-card/feature-card";
import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const Insights = () => {
  return (
    <Section id="insights" pt="15vh">
      <Heading align={"center"}>🖥️ аналитика</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <FeatureCard title="Экспорт аналитики" description="" pro />
        <FeatureCard title="Личный кабинет" description="" pro />
      </Flex>
    </Section>
  );
};
