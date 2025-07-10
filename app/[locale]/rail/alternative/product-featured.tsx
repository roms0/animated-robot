import { Box, Flex, Heading, Section } from "@radix-ui/themes";

export const ProductFeatured = () => {
  return (
    <Section>
      <Flex wrap={"wrap"} justify={"center"} gap="5" align={"center"}>
        <Box>
          <Heading weight={"regular"} color="gray" size="2">
            партнёры
          </Heading>
        </Box>
        <Box>
          <Heading className="featured" weight={"medium"} size="2">
            vk cloud
          </Heading>
        </Box>
        <Box>
          <Heading className="featured" weight={"medium"} size="2">
            complitech
          </Heading>
        </Box>
        <Box>
          <Heading className="featured" weight={"medium"} size="2">
            м-групп
          </Heading>
        </Box>
      </Flex>
    </Section>
  );
};
