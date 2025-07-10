import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const Invoice = () => {
  return (
    <Section id="invoice" pt="15vh">
      <Heading align={"center"}>📋 заявка</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            подбор лучших заявок
          </Heading>
        </Card>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            оценка стоимости выполнения
          </Heading>
        </Card>
      </Flex>
    </Section>
  );
};
