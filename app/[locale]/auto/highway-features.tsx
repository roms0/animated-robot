import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="shelf"
            src={"/features/shelf.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature highway title")}.</span>{" "}
            {t("feature highway desc")}.
          </Text>
        </Flex>
        <Flex mt="5" gap={"1"} wrap={"wrap"}>
          <Box className="parameter-box">{t("param store worktime")}</Box>
          <Box className="parameter-box">{t("param vehicle load")}</Box>
        </Flex>
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
        <Flex align={"center"} gap={"2"}>
          <Image width={60} height={60} alt="fuel" src={"/features/fuel.png"} />
          <Text size={"2"}>
            <span className="farfetch">{t("feature fuel title")}.</span>{" "}
            {t("feature fuel desc")}.
          </Text>
        </Flex>
        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="stopwatch"
            src={"/features/stopwatch.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature speed title")}.</span>{" "}
            {t("feature speed desc")}.
          </Text>
        </Flex>
        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="fragile"
            src={"/features/fragile.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature fragile title")}</span>{" "}
            {t("feature fragile desc")}.
          </Text>
        </Flex>
        <Flex gap={"1"} wrap={"wrap"}>
          <Box className="parameter-box">{t("param vehicle type")}</Box>
          <Box className="parameter-box">{t("param trip frequency")}</Box>
          <Box className="parameter-box">{t("param vertical only")}</Box>
          <Box className="parameter-box">{t("param dont stack")}</Box>
        </Flex>
      </Flex>
    </Grid>
  );
};
