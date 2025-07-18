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

export const Mile = () => {
  return (
    <Section id="mile" pt="15vh">
      <Heading align={"center"}>Первая и последняя миля</Heading>
      <Flex mt="8" wrap={"wrap"} gap={"6"}>
        <FeatureCard
          title="Список маршрутов"
          description="Оптимальные маршруты между складом и вашими точками доставки"
        />
        <FeatureCard
          title="Особый груз"
          description="Оптимизация доставки стандартного, а также хрупкого и негабаритного груза"
          pro
        />
        <FeatureCard
          title="Дозаявка"
          description="Подскажем, для какой задачи будет выгодно расширить парк"
          pro
        />
        <FeatureCard
          title="📍 Альтернативные точки "
          description="Интеллектуальная привязка существующих точек к складу отправления или назначения"
          pro
        />
      </Flex>
    </Section>
  );
};
