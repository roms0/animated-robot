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

export const High = () => {
  return (
    <Section id="high" pt="15vh">
      <Heading align={"center"}>🚦⛽ магистраль</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <FeatureCard
          title=" Список потоков следования"
          description="Груз перемещается из склада на склад по одному и более плечам"
        />
        <FeatureCard
          title="Топливная аналитика"
          description="Оптимальные маршруты из склада в указанные вами точки доставки"
          pro
        />
        <FeatureCard
          title="Скорости на маршруте"
          description="Оптимальные маршруты из склада в указанные вами точки доставки"
          pro
        />
        <FeatureCard
          title="Особый груз"
          description="Маршруты, смоделированные для развоза хрупкого или габартитного
              груза"
          pro
        />
      </Flex>
    </Section>
  );
};
