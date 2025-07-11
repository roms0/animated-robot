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
      <Heading align={"center"}>📍 миля</Heading>
      <Flex mt="8" wrap={"wrap"} gap={"6"}>
        <FeatureCard
          title="Список маршрутов"
          description="Оптимальные маршруты из склада в указанные вами точки доставки"
        />
        <FeatureCard
          title="Особый груз"
          description="Маршруты, смоделированные для развоза хрупкого или габартитного
              груза"
          pro
        />
        <FeatureCard
          title="Дозаявка"
          description="Подскажем, для какой задачи будет выгодно расширить парк"
          pro
        />
        <FeatureCard
          title="Альтернативные точки "
          description="Прежде чем строить маршруты мы возьмем точки и оптимально свяжем
              их со складами"
          pro
        />
      </Flex>
    </Section>
  );
};
