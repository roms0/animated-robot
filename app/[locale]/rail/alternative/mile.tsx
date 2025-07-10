import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const Mile = () => {
  return (
    <Section id="invoice" pt="15vh">
      <Heading align={"center"}>📍 заявка</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            список маршрутов
          </Heading>
        </Card>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            особый груз
          </Heading>
        </Card>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            дозаявка
          </Heading>
        </Card>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            альтернативные точки
          </Heading>
        </Card>
      </Flex>
    </Section>
  );
};
