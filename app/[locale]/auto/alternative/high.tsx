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
      <Heading align={"center"}>Магистраль</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <FeatureCard
          title="Список потоков следования"
          description="Оптимальные движение груза из склада на склад по одному и более плечам"
        />
        <FeatureCard
          title="⛽ Оптимизация затрат на топливо"
          description="Построение оптимальных маршрутов по АЗС с учетом топливных карт и цены топлива"
          pro
        />
        <FeatureCard
          title="🚦 Скорости на маршруте"
          description="ML-модели формирования эффективных нормативных скоростей по каждому маршруту"
          pro
        />
        <FeatureCard
          title="Особый груз"
          description="Учет основных параметров груза, его габаритов, а также характеристик нестандартного типа грузов"
          pro
        />
      </Flex>
    </Section>
  );
};
