"use client";

import { Flex, Link, Text } from "@radix-ui/themes";
import * as React from "react";

export const DesktopMenu = () => {
  return (
    <>
      <Flex
        align={"center"}
        gap={{ initial: "2", md: "9" }}
        pt={"4"}
        overflow={"hidden"}
        direction={{ initial: "column", md: "row" }}
      >
        <Text asChild>
          <Link
            highContrast
            underline="none"
            size={"2"}
            weight={"medium"}
            href="/"
          >
            умные машины
          </Link>
        </Text>
        <Flex align={"center"} gap={"6"} overflow={"hidden"}>
          <Link
            highContrast
            underline="none"
            size={"2"}
            weight={"medium"}
            href="/auto"
          >
            автомобили
          </Link>
          <Link
            highContrast
            underline="none"
            size={"2"}
            weight={"medium"}
            href="/rail"
          >
            железные дороги
          </Link>
          <Text size={"2"} color="gray" weight={"light"}>
            курьер
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
