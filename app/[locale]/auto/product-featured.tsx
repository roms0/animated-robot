import { Box, Flex, Heading, Section } from "@radix-ui/themes";

export const ProductFeatured = () => {
  return (
    <Section>
      <Flex wrap={"wrap"} justify={"center"} gap="20vw" align={"center"}>
        <Box>
          <Heading>complitech</Heading>
        </Box>
        <Box>
          <Heading>м-групп</Heading>
        </Box>
        <Box>
          <Heading>vk cloud</Heading>
        </Box>
      </Flex>
    </Section>
  );
};
