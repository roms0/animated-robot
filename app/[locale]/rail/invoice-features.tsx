import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

export const InvoiceFeatures = () => {
  const t = useTranslations();
  return (
    <Grid
      columns={"2"}
      mt="6"
      m="auto"
      height={"100%"}
      width={"900px"}
      gap={"4"}
    >
      <Box className="elevated-card">
        <Flex gap={"1"} wrap={"wrap"}>
          <Box className="parameter-box">{t("param tarif")}</Box>
          <Box className="parameter-box">{t("param dispatches")}</Box>
          <Box className="parameter-box">{t("param cargo type")}</Box>
        </Flex>
        <Box mt="5">
          <Text size={"2"}>
            <span className="farfetch">{t("feature schema title")}.</span>{" "}
            {t("feature schema desc")}.
          </Text>
        </Box>
      </Box>
      <Flex
        gap="5"
        direction={"column"}
        position={"relative"}
        style={{
          border: "1px dashed var(--pink-10)",
          borderRadius: "var(--radius-2)",
        }}
        p="2"
      >
        <Badge
          variant="solid"
          color="pink"
          style={{ position: "absolute", top: "-10px", right: "-20px" }}
        >
          {t("title_name")}
        </Badge>
        <Flex gap={"1"} wrap={"wrap"}>
          <Box className="parameter-box">{t("param dispatch density")}</Box>
          <Box className="parameter-box">{t("param arrival density")}</Box>
          <Box className="parameter-box">{t("param owner rank")}</Box>
          <Box className="parameter-box">{t("param cargo wait time")}</Box>
          <Box className="parameter-box">{t("param issue schedule")}</Box>
        </Flex>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature assessment title")}.</span>{" "}
            {t("feature assessment desc")}.
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature assignment title")}.</span>{" "}
            {t("feature assignment desc")}.
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature ranking title")}.</span>{" "}
            {t("feature ranking desc")}.
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};
