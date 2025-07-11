import { FeatureCard } from "@/app/components/feature-card/feature-card";
import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const Scheme = () => {
  return (
    <Section id="scheme" pt="15vh">
      <Heading align={"center"}>✍ логистическая схема</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <FeatureCard
          title="Динамическая оптимальная схема пути"
          description=""
        />
        <FeatureCard title="Заадресовка вагона" description="" pro />
      </Flex>
    </Section>
  );
};
