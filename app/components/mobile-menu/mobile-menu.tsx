"use client";

import { Box, ChevronDownIcon, Grid, Heading } from "@radix-ui/themes";
import classes from "./mobile-menu.module.css";
import React, { useEffect } from "react";
import { useMenuStore } from "@/app/components/store/menu";
import { useLocale, useTranslations } from "next-intl";
import { Accordion } from "radix-ui";
import Image from "next/image";
import Link from "next/link";
import { Language } from "../desktop-menu/language";
import { usePathname, useSearchParams } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const materials = {
  en: [
    { name: "way.pro auto", path: "/en/way_pro_auto.pdf" },
    { name: "way.pro auto docs", path: "/en/way_pro_auto_docs.pdf" },
  ],
  ru: [
    { name: "путь.про авто", path: "/ru/way_pro_auto_ru.pdf" },
    { name: "путь.про жд", path: "/ru/way_pro_rail_ru.pdf" },
    {
      name: "Инструкция по установке экземпляра ПО «Путь.Про» для эксперта",
      path: "/ru/Инструкция_по_установке_экземпляра_ПО_«Путь_Про»_для_эксперта.pdf",
    },
    {
      name: "Информация, необходимая для эксплуатации экземпляра «Путь.Про»",
      path: "/ru/Информация,_необходимая_для_эксплуатации_экземпляра_ПО_«Путь_Про».pdf",
    },
    {
      name: "Описание функциональных характеристик экземпляра ПО «Путь.Про»",
      path: "/ru/Описание_функциональных_характеристик_экземпляра_ПО_«Путь_Про».pdf",
    },
  ],
} as const;

export const MobileMenu = () => {
  const { isOpen, toggle, close } = useMenuStore();
  const params = useSearchParams();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();
  useEffect(close, [params.get("view"), pathname]);
  return (
    <>
      <Box className={`${classes.menu} ${isOpen && classes["menu-seen"]}`}>
        <Box
          className={`${classes.container} ${
            isOpen && classes["container--open"]
          }`}
        >
          <Box ml="2" mb="2">
            <Link href="/">
              <Heading size={"2"} weight={"medium"}>
                {t("text_main")}
              </Heading>
            </Link>
          </Box>
          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Trigger className={classes.Trigger}>
                <Heading size={"2"} weight={"medium"}>
                  {t("title_auto")}
                </Heading>
                <ChevronDownIcon className={classes.Chevron} aria-hidden />
              </Accordion.Trigger>
              <Accordion.Content className={classes.Content}>
                <Grid gapX={"2"} columns={"40px 260px"} align={"center"}>
                  <Box
                    className={`${classes.pic}
                    }`}
                  >
                    <Image
                      alt="small-cargo"
                      src={"/small-cargo-Photoroom.png"}
                      width={28}
                      height={28}
                    />
                  </Box>
                  <Link href="/auto?view=mile">
                    <Heading size={"2"} weight={"regular"}>
                      {t("miles")}
                    </Heading>
                  </Link>
                  <Box
                    className={`${classes.pic}
                    }`}
                  >
                    <Image
                      style={{ transform: "rotate(-5deg)" }}
                      alt="huge-cargo"
                      src={"/huge-cargo-Photoroom.png"}
                      width={28}
                      height={28}
                    />
                  </Box>
                  <Link href="/auto?view=highway">
                    <Heading size={"2"} weight={"regular"}>
                      {t("highway")}
                    </Heading>
                  </Link>
                  <Box
                    className={`${classes.pic} 
                    }`}
                  >
                    <Image
                      alt="huge-cargo"
                      src={"/store-Photoroom.png"}
                      width={28}
                      height={28}
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
                <Heading size={"2"} weight={"medium"}>
                  {t("title_rail")}
                </Heading>
                <ChevronDownIcon className={classes.Chevron} aria-hidden />
              </Accordion.Trigger>
              <Accordion.Content className={classes.Content}>
                <Grid gapX={"3"} columns={"40px 260px"} align={"center"}>
                  <Box className={classes.pic}>
                    <Image
                      alt="small-cargo"
                      src={"/closed-container-Photoroom.png"}
                      width={28}
                      height={28}
                    />
                  </Box>
                  <Link href={"/rail?view=invoice"}>
                    <Heading size={"2"} weight={"regular"}>
                      {t("invoice")}
                    </Heading>
                  </Link>
                  <Box className={`${classes.pic}`}>
                    <Image
                      alt="huge-cargo"
                      src={"/pc-Photoroom.png"}
                      width={28}
                      height={28}
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
                <Heading size={"2"} weight={"medium"}>
                  {t("link_materials")}
                </Heading>
                <ChevronDownIcon className={classes.Chevron} aria-hidden />
              </Accordion.Trigger>
              <Accordion.Content className={classes.Content}>
                <Grid
                  gapX="2"
                  gapY={"1"}
                  columns={"40px 260px"}
                  align={"center"}
                >
                  {materials[locale as "ru" | "en"].map((m) => {
                    return (
                      <React.Fragment key={m.name}>
                        <Box>
                          <Image
                            alt="small-cargo"
                            src={"/pdf-icon.png"}
                            width={28}
                            height={28}
                          />
                        </Box>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href={m.path}
                        >
                          <Heading size={"1"} weight={"regular"}>
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
        <Box pl="2" pr="2" className={classes.language}>
          <Language />
        </Box>
        <Box
          onClick={toggle}
          className={classes.indicator}
          width={"42px"}
          height={"42px"}
        >
          <HamburgerMenuIcon width={32} height={32} />
        </Box>
      </Box>
    </>
  );
};
