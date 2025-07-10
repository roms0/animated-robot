import { Card, Flex, Heading, Section } from "@radix-ui/themes";

export const Insights = () => {
  return (
    <Section id="insights" pt="15vh">
      <Heading align={"center"}>🖥️ аналитика</Heading>
      <Flex mt="4" wrap={"wrap"} gap={"4"}>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            экспорт аналитики
          </Heading>
        </Card>
        <Card>
          <Heading size={"1"} weight={"medium"}>
            личный кабинет
          </Heading>
        </Card>
      </Flex>
    </Section>
  );
};
