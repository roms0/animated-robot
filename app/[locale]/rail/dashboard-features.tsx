import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

export const DashboardFeatures = () => {
  const t = useTranslations();
  return (
    <Grid
      columns={"1"}
      mt="6"
      m="auto"
      width={"450px"}
      gap={"4"}
      height={"100%"}
    >
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
        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature managing title")}.</span>{" "}
            {t("feature managing desc")}.
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">{t("feature metrics title")}.</span>{" "}
            {t("feature metrics desc")}.
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};
