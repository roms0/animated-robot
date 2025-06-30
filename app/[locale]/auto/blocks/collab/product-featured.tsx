"use client";

import { useGSAP } from "@gsap/react";
import { Box, Flex, Heading, Section } from "@radix-ui/themes";
import gsap from "gsap";

export const ProductFeatured = () => {
  useGSAP(() => {
    gsap.from(".featured", { opacity: 0, y: 100, delay: 1 });
  });
  return (
    <Flex mt="9" wrap={"wrap"} justify={"center"} gap="5" align={"center"}>
      <Box>
        <Heading className="featured" weight={"medium"} size="4">
          vk cloud
        </Heading>
      </Box>
      <Box>
        <Heading className="featured" weight={"medium"} size="4">
          complitech
        </Heading>
      </Box>
      <Box>
        <Heading className="featured" weight={"medium"} size="4">
          м-групп
        </Heading>
      </Box>
    </Flex>
  );
};
