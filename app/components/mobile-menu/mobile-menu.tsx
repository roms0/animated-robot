"use client";

import { Badge, Box, Flex, Grid, Heading, Reset, Text } from "@radix-ui/themes";
import classes from "./mobile-menu.module.css";
import React, { useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { useMenuStore } from "@/app/components/store/menu";
import Link from "next/link";

const parsing = {
  "": { title: "умные машины", path: "/", color: "gray" },
  auto: { title: "авто", path: "/auto", color: "plum" },
  rail: { title: "жд", path: "/rail", color: "pink" },
} as const;

const BreadCrumbs = ({ chunks }: { chunks: string[] }) => {
  return (
    <>
      {chunks.map((chunk, i) => {
        if (i > 0 && chunk == "") return null;
        return (
          <React.Fragment key={chunk}>
            {i > 0 && <code>{` `}</code>}
            <Badge color={parsing[chunk as keyof typeof parsing].color}>
              {parsing[chunk as keyof typeof parsing].title}
            </Badge>
          </React.Fragment>
        );
      })}
    </>
  );
};

export const MobileMenu = () => {
  const { isOpen, toggle } = useMenuStore();
  const path = usePathname();
  return (
    <>
      <Box
        className={`${classes.menu} ${isOpen && classes["menu-seen"]}`}
        display={{ initial: "block", md: "none" }}
      >
        <Flex
          onClick={toggle}
          align={"center"}
          gap={"4"}
          justify={"between"}
          p="4"
        >
          <Box>
            <BreadCrumbs chunks={path.split("/")} />
          </Box>
          <Box>
            <Text size={"2"} color="gray">
              меню
            </Text>
          </Box>
        </Flex>
        <Grid columns={"2"} p="4">
          <Box>
            <Link className={classes.link} href="/auto">
              авто 🚛
            </Link>
            <Flex direction={"column"} mt="4">
              <Link className={classes.link} href="/auto#high">
                магистраль 🚛
              </Link>
            </Flex>
          </Box>
          <Box>
            <Link className={classes.link} href="/rail">
              жд 🪨📦🛢️
            </Link>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
