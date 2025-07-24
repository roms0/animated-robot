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
import React from "react";
import { useMenuStore } from "@/app/components/store/menu";
import { useLocale, useTranslations } from "next-intl";
import { Accordion } from "radix-ui";
import Image from "next/image";
import Link from "next/link";
import { Language } from "../desktop-menu/language";
import { useSearchParams } from "next/navigation";
import { Logo } from "../product-logo";

const materials = {
  en: [
    { name: "way.pro auto", path: "/en/way_pro_auto.pdf" },
    { name: "way.pro auto docs", path: "/en/way_pro_auto_docs.pdf" },
  ],
  ru: [
    { name: "путь.про авто", path: "/ru/way_pro_auto_ru.pdf" },
    { name: "путь.про жд", path: "/ru/way_pro_rail_ru.pdf" },
  ],
} as const;

export const MobileMenu = () => {
  const { isOpen, toggle } = useMenuStore();
  const params = useSearchParams();
  const locale = useLocale();
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
          <Accordion.Root type="single" collapsible>
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
                  {materials[locale as "ru" | "en"].map((m) => {
                    return (
                      <React.Fragment key={m.name}>
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
                          href={m.path}
                        >
                          <Heading size={"2"} weight={"medium"}>
                            {m.name}
                          </Heading>
                        </Link>
                      </React.Fragment>
                    );
                  })}
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
