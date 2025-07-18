"use client";
import { Box, Grid, Heading } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Autorail = () => {
  const t = useTranslations();
  return (
    <Grid width={"550px"} gapX={"6"} pt="6" columns={"2"} p="4">
      <Box>
        <Heading size={"1"} weight={"bold"}>
          {t("title_auto")}
        </Heading>
        <Grid mt="4" gapX={"2"} columns={"40px 200px"} align={"center"}>
          <Box>
            <Image
              alt="small-cargo"
              src={"/small-cargo-Photoroom.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link href="/auto?view=mile">
            <Heading size={"2"} weight={"medium"}>
              {t("feature_miles")}
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
            <Heading size={"2"} weight={"medium"}>
              {t("feature_highway")}
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
            <Heading size={"2"} weight={"medium"}>
              {t("feature_store")}
            </Heading>
          </Link>
        </Grid>
      </Box>
      <Box>
        <Heading size={"1"} weight={"bold"}>
          {t("title_rail")}
        </Heading>
        <Grid mt="4" gapX={"2"} columns={"40px 200px"} align={"center"}>
          <Box>
            <Image
              alt="small-cargo"
              src={"/closed-container-Photoroom.png"}
              width={38}
              height={38}
            />
          </Box>
          <Link href={"/rail?view=invoice"}>
            <Heading size={"2"} weight={"medium"}>
              {t("feature_invoice")}
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
            <Heading size={"2"} weight={"medium"}>
              {t("feature_dashboard")}
            </Heading>
          </Link>
        </Grid>
      </Box>
    </Grid>
  );
};
