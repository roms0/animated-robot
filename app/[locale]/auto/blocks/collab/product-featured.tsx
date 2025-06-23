import { Box, Flex, Heading, Section } from "@radix-ui/themes";

export const ProductFeatured = () => {
  return (
    <Section>
      <Flex wrap={"wrap"} justify={"center"} gap="10vw" align={"center"}>
        <Box>
          <Heading weight={"bold"} size="4">
            complitech
          </Heading>
        </Box>
        <Box>
          <Heading weight={"bold"} size="4">
            м-групп
          </Heading>
        </Box>
        <Box>
          <Heading weight={"bold"} size="4">
            vk cloud
          </Heading>
        </Box>
      </Flex>
    </Section>
  );
};
