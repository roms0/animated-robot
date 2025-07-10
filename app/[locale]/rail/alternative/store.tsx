import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const Store = () => {
  return (
    <Section id="personal" pt="15vh">
      <Heading align={"center"}>📦 личный кабинет</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            оптимальное зонирование
          </Heading>
        </Card>
      </Flex>
    </Section>
  );
};
