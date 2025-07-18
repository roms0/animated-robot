import { FeatureCard } from "@/app/components/feature-card/feature-card";
import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const Invoice = () => {
  return (
    <Section id="invoice" pt="15vh">
      <Heading align={"center"}>📋 План перевозок и работа с заявками</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <FeatureCard
          title="Подбор лучших заявок"
          description="Формирование оптимальных логистических схем с учетом установленных параметров и задачи максимизации доходности"
        />
        <FeatureCard
          title="Оценка стоимости выполнения заявки"
          description="Автоматически определение эффективной ставки за перевозку и доходности в схеме"
          pro
        />
        <FeatureCard
          title="Заадресовка"
          description="Точная рекомендация сервиса оптимальной станции заадресовки для вагона в ближнем и дальнем подходе"
          pro
        />
      </Flex>
    </Section>
  );
};
