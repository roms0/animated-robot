import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const Scheme = () => {
  return (
    <Section id="scheme" pt="15vh">
      <Heading align={"center"}>✍ логистическая схема</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            заадресовка вагона
          </Heading>
        </Card>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            динамическая оптимальная схема пути
          </Heading>
        </Card>
      </Flex>
    </Section>
  );
};
