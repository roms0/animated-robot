import { Box, Flex, Heading, Section } from "@radix-ui/themes";

export const ProductHeading = () => {
  return (
    <Section pt={"15vh"}>
      <Flex justify={"center"}>
        <Box maxWidth={"330px"}>
          <Heading align={"center"} weight={"medium"} color="gray">
            путь авто
          </Heading>
          <Heading align={"center"}>
            пайплайн для <span className="farfetch">прибыльной</span> и
            прогнозируемой логистики
          </Heading>
        </Box>
      </Flex>
    </Section>
  );
};
