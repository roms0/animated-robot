"use client";

import {
  Badge,
  Box,
  ChevronDownIcon,
  Flex,
  Grid,
  Heading,
} from "@radix-ui/themes";
import classes from "./mobile-menu.module.css";
import React, { useEffect, useState } from "react";
import { useMenuStore } from "@/app/components/store/menu";
import { HamburgerMenuIcon, SunIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { Accordion } from "radix-ui";
import Image from "next/image";
import Link from "next/link";
import { Language } from "../desktop-menu/language";
import { useMediaQuery } from "react-responsive";
import { usePathname, useSearchParams } from "next/navigation";
import { Logo } from "../product-logo";
import { Contacts } from "../contacts/contacts";

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
  const params = useSearchParams();
  const t = useTranslations();
  return (
    <>
      <Box className={`${classes.menu} ${isOpen && classes["menu-seen"]}`}>
        <Box
          className={`${classes.container} ${
            isOpen && classes["container--open"]
          }`}
        >
          <Language />
          <Accordion.Root type="single" defaultValue="item-1" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Trigger className={classes.Trigger}>
                <Heading size={"4"} weight={"bold"}>
                  {t("title_auto")}
                </Heading>
                <ChevronDownIcon className={classes.Chevron} aria-hidden />
              </Accordion.Trigger>
              <Accordion.Content className={classes.Content}>
                <Grid mt="4" gapX={"2"} columns={"40px 260px"} align={"center"}>
                  <Box
                    className={`${classes.pic} ${
                      params.get("view") === "mile" && classes["pic--active"]
                    }`}
                  >
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
                  <Box
                    className={`${classes.pic} ${
                      params.get("view") === "highway" && classes["pic--active"]
                    }`}
                  >
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
                  <Box
                    className={`${classes.pic} ${
                      params.get("view") === "store" && classes["pic--active"]
                    }`}
                  >
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
              <Accordion.Trigger className={classes.Trigger}>
                <Heading size={"4"} weight={"bold"}>
                  {t("title_rail")}
                </Heading>
                <ChevronDownIcon className={classes.Chevron} aria-hidden />
              </Accordion.Trigger>
              <Accordion.Content className={classes.Content}>
                <Grid mt="4" gapX={"3"} columns={"40px 260px"} align={"center"}>
                  <Box
                    className={`${classes.pic} ${
                      params.get("view") === "invoice" && classes["pic--active"]
                    }`}
                  >
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
                  <Box
                    className={`${classes.pic} ${
                      params.get("view") === "dashboard" &&
                      classes["pic--active"]
                    }`}
                  >
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
              <Accordion.Trigger className={classes.Trigger}>
                <Heading size={"4"} weight={"bold"}>
                  {t("link_materials")}
                </Heading>
                <ChevronDownIcon className={classes.Chevron} aria-hidden />
              </Accordion.Trigger>
              <Accordion.Content className={classes.Content}>
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
        <Box
          onClick={toggle}
          className={classes.indicator}
          width={"42px"}
          height={"42px"}
        >
          <Logo />
        </Box>
      </Box>
    </>
  );
};
