"use client";
import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { HashLink } from "../hash-link/hash-link";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Attachments = () => {
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
      </Box>
      <Box>
        <Heading size={"1"} weight={"bold"}>
          {t("title_rail")}
        </Heading>
        <Grid mt="4" gapX={"2"} columns={"40px 200px"} align={"center"}>
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
            href={"/smart machines railroads.pdf"}
          >
            <Heading size={"2"} weight={"medium"}>
              {t("text_presentation")}
            </Heading>
          </Link>
        </Grid>
      </Box>
    </Grid>
  );
};
