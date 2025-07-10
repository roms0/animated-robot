import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const High = () => {
  return (
    <Section id="high" pt="15vh">
      <Heading align={"center"}>🚦⛽ магистраль</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            список потоков следования
          </Heading>
        </Card>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            топливная аналитика
          </Heading>
        </Card>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            скорости маршрута
          </Heading>
        </Card>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            особенный груз
          </Heading>
        </Card>
      </Flex>
    </Section>
  );
};
