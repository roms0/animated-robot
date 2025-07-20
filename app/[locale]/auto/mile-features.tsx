"use client";
import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

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
      <Box className="elevated-card">
        <Flex gap={"1"} wrap={"wrap"}>
          <Box className="parameter-box">{t("param min time")}</Box>
          <Box className="parameter-box">{t("param min cost")}</Box>
          <Box className="parameter-box">{t("param cargo per point")}</Box>
          <Box className="parameter-box">{t("param time slots")}</Box>
        </Flex>
        <Box mt="5">
          <Text size={"2"}>
            <span className="farfetch">{t("feature routing title")}.</span>{" "}
            {t("feature routing desc")}.
          </Text>
        </Box>
      </Box>
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
        <Flex gap={"1"} wrap={"wrap"}>
          <Box className="parameter-box">{t("param vertical only")}</Box>
          <Box className="parameter-box">{t("param delivery priority")}</Box>
          <Box className="parameter-box">{t("param dont stack")}</Box>
        </Flex>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature fragile title")}.</span>{" "}
            {t("feature fragile desc")}.
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature addition title")}.</span>{" "}
            {t("feature addition desc")}.
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature alter title")}.</span>{" "}
            {t("feature alter desc")}.
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};
