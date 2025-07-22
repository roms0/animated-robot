"use client";

import { Badge, Box, Flex, Grid, Heading } from "@radix-ui/themes";
import classes from "./mobile-menu.module.css";
import React from "react";
import { useMenuStore } from "@/app/components/store/menu";
import { HamburgerMenuIcon, SunIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { Accordion } from "radix-ui";
import Image from "next/image";
import Link from "next/link";
import { Language } from "../desktop-menu/language";

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
  const t = useTranslations();

  return (
    <>
      <Box className={`${classes.menu} ${isOpen && classes["menu-seen"]}`}>
        <Box
          className={`${classes.content} ${isOpen && classes["content--open"]}`}
        >
          <Flex justify={"center"}>
            <Language />
          </Flex>

          <Accordion.Root type="single" defaultValue="item-1" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Trigger>
                <Heading size={"1"} weight={"bold"}>
                  {t("title_auto")}
                </Heading>
              </Accordion.Trigger>
              <Accordion.Content>
                <Grid mt="4" gapX={"2"} columns={"40px 260px"} align={"center"}>
                  <Box>
                    <Image
                      alt="small-cargo"
                      src={"/small-cargo-Photoroom.png"}
                      width={38}
                      height={38}
                    />
                  </Box>
                  <Link href="/auto?view=mile">
                    <Heading size={"2"} weight={"regular"}>
                      {t("miles")}
                    </Heading>
                  </Link>
                  <Box>
                    <Image
                      style={{ transform: "rotate(-5deg)" }}
                      alt="huge-cargo"
                      src={"/huge-cargo-Photoroom.png"}
                      width={38}
                      height={38}
                    />
                  </Box>
                  <Link href="/auto?view=highway">
                    <Heading size={"2"} weight={"regular"}>
                      {t("highway")}
                    </Heading>
                  </Link>
                  <Box>
                    <Image
                      alt="huge-cargo"
                      src={"/store-Photoroom.png"}
                      width={38}
                      height={38}
                    />
                  </Box>
                  <Link href="/auto?view=store">
                    <Heading size={"2"} weight={"regular"}>
                      {t("store")}
                    </Heading>
                  </Link>
                </Grid>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Trigger>
                <Heading size={"1"} weight={"bold"}>
                  {t("title_rail")}
                </Heading>
              </Accordion.Trigger>
              <Accordion.Content>
                <Grid mt="4" gapX={"2"} columns={"40px 260px"} align={"center"}>
                  <Box>
                    <Image
                      alt="small-cargo"
                      src={"/closed-container-Photoroom.png"}
                      width={38}
                      height={38}
                    />
                  </Box>
                  <Link href={"/rail?view=invoice"}>
                    <Heading size={"2"} weight={"regular"}>
                      {t("invoice")}
                    </Heading>
                  </Link>
                  <Box>
                    <Image
                      alt="huge-cargo"
                      src={"/pc-Photoroom.png"}
                      width={38}
                      height={38}
                    />
                  </Box>
                  <Link href={"/rail?view=dashboard"}>
                    <Heading size={"2"} weight={"regular"}>
                      {t("dashboard")}
                    </Heading>
                  </Link>
                </Grid>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-3">
              <Accordion.Trigger>
                <Heading size={"1"} weight={"bold"}>
                  {t("link_materials")}
                </Heading>
              </Accordion.Trigger>
              <Accordion.Content>
                <Grid mt="4" gapX={"2"} columns={"40px 260px"} align={"center"}>
                  <Box>
                    <Image
                      alt="small-cargo"
                      src={"/pdf-icon.png"}
                      width={38}
                      height={38}
                    />
                  </Box>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"/smart machines auto.pdf"}
                  >
                    <Heading size={"2"} weight={"medium"}>
                      {t("text_presentation")}
                    </Heading>
                  </Link>
                  <Box>
                    <Image
                      alt="small-cargo"
                      src={"/pdf-icon.png"}
                      width={38}
                      height={38}
                    />
                  </Box>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"/smart machines auto.pdf"}
                  >
                    <Heading size={"2"} weight={"medium"}>
                      {t("text_presentation")}
                    </Heading>
                  </Link>
                </Grid>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </Box>
        <HamburgerMenuIcon
          className={classes.indicator}
          onClick={toggle}
          width={36}
          height={36}
        />
      </Box>
    </>
  );
};
