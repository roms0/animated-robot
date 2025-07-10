import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const Mile = () => {
  return (
    <Section id="mile" pt="15vh">
      <Heading align={"center"}>📍 миля</Heading>
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
