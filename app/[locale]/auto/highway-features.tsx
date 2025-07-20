import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

export const HighwayFeatures = () => {
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
          <Box className="parameter-box">{t("param store worktime")}</Box>
          <Box className="parameter-box">{t("param vehicle load")}</Box>
        </Flex>
        <Box mt="5">
          <Text size={"2"}>
            <span className="farfetch">{t("feature highway title")}.</span>{" "}
            {t("feature highway desc")}.
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
          <Box className="parameter-box">{t("param vehicle type")}</Box>
          <Box className="parameter-box">{t("param trips frequency")}</Box>
          <Box className="parameter-box">{t("param vertical only")}</Box>
          <Box className="parameter-box">{t("param dont stack")}</Box>
        </Flex>

        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature fuel title")}.</span>{" "}
            {t("feature fuel title")}.
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature speed title")}.</span>{" "}
            {t("feature speed desc")}.
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature fragile title")}</span>{" "}
            {t("feature fragile desc")}.
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};
