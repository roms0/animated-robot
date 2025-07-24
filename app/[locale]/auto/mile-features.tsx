"use client";
import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

const routing = [
  "param min time",
  "param min cost",
  "param time slots",
  "param vehicle space capacity",
  "param vehicle mass capacity",
  "param trip duration",
  "param unload time",
];

const routingplus = [
  "param vertical only",
  "param dont stack",
  "param delivery priority",
  "param dimensions",
  "param trip frequency",
];

export const MileFeatures = () => {
  const t = useTranslations();
  return (
    <Grid
      columns={"2"}
      mt="6"
      m="auto"
      width={"900px"}
      height={"100%"}
      gap={"4"}
    >
      <Flex
        className="elevated-card"
        gap="5"
        direction={"column"}
        position={"relative"}
        p="2"
      >
        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="intersection"
            src={"/features/interjection.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature routing title")}.</span>{" "}
            {t("feature routing desc")}.
          </Text>
        </Flex>
        <Flex mt="auto" gap={"1"} wrap={"wrap"}>
          {routing.map((par) => {
            return (
              <Box key={par} className="parameter-box">
                {t(par)}
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Flex
        gap="5"
        direction={"column"}
        position={"relative"}
        style={{
          border: "1px dashed var(--sky-10)",
          borderRadius: "var(--radius-2)",
        }}
        p="2"
      >
        <Badge
          variant="solid"
          style={{ position: "absolute", top: "-10px", right: "-20px" }}
        >
          {t("title_name")}
        </Badge>

        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="fragile"
            src={"/features/fragile.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature fragile title")}.</span>{" "}
            {t("feature fragile desc")}.
          </Text>
        </Flex>
        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="addition"
            src={"/features/addition.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature addition title")}.</span>{" "}
            {t("feature addition desc")}.
          </Text>
        </Flex>
        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="clusters"
            src={"/features/clusters.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature alter title")}.</span>{" "}
            {t("feature alter desc")}.
          </Text>
        </Flex>
        <Flex gap={"1"} mt="auto" wrap={"wrap"}>
          {routingplus.map((par) => {
            return (
              <Box key={par} className="parameter-box">
                {t(par)}
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Grid>
  );
};
