import { FeatureCard } from "@/app/components/feature-card/feature-card";
import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

export const Store = () => {
  return (
    <Section id="store" pt="15vh">
      <Heading align={"center"}>📦 склад</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <FeatureCard
          title="Оптимальное зонирование"
          description="Зоны доставки для ваших складов"
          pro
        />
      </Flex>
    </Section>
  );
};
