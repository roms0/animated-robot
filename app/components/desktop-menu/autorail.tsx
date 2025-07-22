"use client";
import { Box, Grid, Heading } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Autorail = () => {
  const t = useTranslations();
  return (
    <Grid width={"660px"} gapX={"6"} pt="6" columns={"2"} p="4">
      <Box>
        <Link href="/auto?scroll=0">
          <Heading size={"1"} weight={"bold"}>
            {t("title_auto")}
          </Heading>
        </Link>
        <Grid mt="4" gapX={"2"} columns={"40px 260px"} align={"center"}>
          <Box>
            <Image
              alt="small-cargo"
              src={"/small-cargo-Photoroom.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link href="/auto?view=mile&scroll=1">
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
          <Link href="/auto?view=highway&scroll=1">
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
          <Link href="/auto?view=store&scroll=1">
            <Heading size={"2"} weight={"regular"}>
              {t("store")}
            </Heading>
          </Link>
        </Grid>
      </Box>
      <Box>
        <Link href="/rail?scroll=0">
          <Heading size={"1"} weight={"bold"}>
            {t("title_rail")}
          </Heading>
        </Link>
        <Grid mt="4" gapX={"2"} columns={"40px 260px"} align={"center"}>
          <Box>
            <Image
              alt="small-cargo"
              src={"/closed-container-Photoroom.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link href={"/rail?view=invoice&scroll=1"}>
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
          <Link href={"/rail?view=dashboard&scroll=1"}>
            <Heading size={"2"} weight={"regular"}>
              {t("dashboard")}
            </Heading>
          </Link>
        </Grid>
      </Box>
    </Grid>
  );
};
