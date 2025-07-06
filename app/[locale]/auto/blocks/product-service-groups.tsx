"use client";

import { Box, Flex, Heading, Section } from "@radix-ui/themes";
import { ToggleGroup } from "radix-ui";

export const ProductServiceGroups = () => {
  return (
    <Section>
      <Flex direction={"column"} align={"center"} gap="4">
        <Box>
          <Heading size={"2"} weight={"medium"}>
            Весь контур логистики
          </Heading>
        </Box>
        <Box>
          <ToggleGroup.Root
            className="services-group-root"
            type="multiple"
            aria-label="Text alignment"
          >
            <ToggleGroup.Item
              className="services-group-item"
              value="left"
              aria-label="Left aligned"
            >
              <Heading align={"center"} size={"1"} weight={"medium"}>
                первая миля
              </Heading>
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className="services-group-item"
              value="right"
              aria-label="Right aligned"
            >
              <Heading align={"center"} size={"1"} weight={"medium"}>
                последняя миля
              </Heading>
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className="services-group-item"
              value="center"
              aria-label="Center aligned"
            >
              <Heading align={"center"} size={"1"} weight={"medium"}>
                магистраль
              </Heading>
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </Box>
      </Flex>
    </Section>
  );
};
