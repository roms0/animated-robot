import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const StoreFeatures = () => {
  const t = useTranslations();
  return (
    <Grid
      columns={"1"}
      mt="6"
      m="auto"
      height={"100%"}
      width={"450px"}
      gap={"4"}
    >
      <Flex
        gap="5"
        direction={"column"}
        position={"relative"}
        height={"100%"}
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
            alt="clusters"
            src={"/features/clusters.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature zone title")}.</span>{" "}
            {t("feature zone desc")}.
          </Text>
        </Flex>
        <Flex gap={"1"} wrap={"wrap"}>
          <Box className="parameter-box">{t("param points per cluster")}</Box>
          <Box className="parameter-box">{t("param range form cluster")}</Box>
          <Box className="parameter-box">{t("param cargo load per point")}</Box>
        </Flex>
      </Flex>
    </Grid>
  );
};
