import { Box, Flex, Heading, Section } from "@radix-ui/themes";

export const ProductFeatured = () => {
  return (
    <Section>
      <Flex justify={"center"} gap="20vw" align={"center"}>
        <Box>
          <Heading>м групп</Heading>
        </Box>
        <Box>
          <Heading>vk cloud</Heading>
        </Box>
        <Box>
          <Heading>complitech</Heading>
        </Box>
      </Flex>
    </Section>
  );
};
