import { Box, Flex, Heading, Section } from "@radix-ui/themes";

export const ProductHeading = () => {
  return (
    <Section pt={"15vh"}>
      <Flex justify={"center"}>
        <Box maxWidth={"330px"}>
          <Heading align={"center"} weight={"medium"} color="gray">
            путь
          </Heading>
          <Heading align={"center"}>
            пайплайн для логистики{" "}
            <span className="farfetch">железных дорог</span>
          </Heading>
        </Box>
      </Flex>
    </Section>
  );
};
