"use client";

import { Badge, Box, Flex, Grid, Text } from "@radix-ui/themes";
import classes from "./mobile-menu.module.css";
import React from "react";
import { usePathname } from "@/i18n/navigation";
import { useMenuStore } from "@/app/components/store/menu";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { HashLink } from "../hash-link/hash-link";

const parsing = {
  "": { title: "Путь.Про", path: "/", color: "gray" },
  auto: { title: "авто", path: "/auto#index", color: "plum" },
  rail: { title: "жд", path: "/rail#index", color: "pink" },
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
        <Flex onClick={toggle} align={"center"} justify={"between"} p="4">
          <Box>
            <BreadCrumbs chunks={path.split("/")} />
          </Box>
          <Box>
            <Text size={"2"} color="gray">
              меню
            </Text>
          </Box>
          <ChevronUpIcon className={classes.indicator} width={18} height={18} />
        </Flex>
        <Grid columns={"2"} pl="4">
          <Box>
            <HashLink href="/auto#index">автомобильная логистика</HashLink>
            <Flex pl="3" gap="1" direction={"column"}>
              <HashLink href="/auto#mile">миля</HashLink>
              <HashLink href="/auto#high">магистраль</HashLink>
              <HashLink href="/auto#store">склад</HashLink>
            </Flex>
          </Box>
          <Box>
            <HashLink href="/rail#index">железнодорожная логистика</HashLink>
            <Flex pl="3" gap="1" direction={"column"}>
              <HashLink href="/rail#invoice">заявки</HashLink>
              <HashLink href="/rail#scheme">вагоны</HashLink>
              <HashLink href="/rail#insights">аналитика</HashLink>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
