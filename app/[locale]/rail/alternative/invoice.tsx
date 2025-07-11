import { FeatureCard } from "@/app/components/feature-card/feature-card";
import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const Invoice = () => {
  return (
    <Section id="invoice" pt="15vh">
      <Heading align={"center"}>📋 заявка</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <FeatureCard title="Подбор лучших заявок" description="" />
        <FeatureCard
          title="Оценка стоимости выполнения заявки"
          description=""
          pro
        />
      </Flex>
    </Section>
  );
};
