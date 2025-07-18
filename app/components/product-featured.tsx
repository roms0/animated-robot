import { Box, Flex, Heading, Section } from "@radix-ui/themes";
import Image from "next/image";

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
          <Flex align={"center"} gap={"2"}>
            <Image width={25} height={25} alt="cloud" src={"/cloud.png"} />
            <Heading className="featured" weight={"medium"} size="2">
              vk cloud
            </Heading>
          </Flex>
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
