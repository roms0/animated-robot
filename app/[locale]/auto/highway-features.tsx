import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

const high = [
  "param vehicle type",
  "param store worktime",
  "param leg count",
  "param trip range",
  "param toll roads",
  "param reverse cargo",
  "param unload time",
  "param warehouse space capacity",
];

const highplus = [
  "param gas cards",
  "param gas seasons",
  "param gas type",
  "param gas price",
  "param trip frequency",
  "param stops gap",
];

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
            alt="shelf"
            src={"/features/shelf.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature highway title")}.</span>{" "}
            {t("feature highway desc")}.
          </Text>
        </Flex>
        <Flex mt="auto" gap={"1"} wrap={"wrap"}>
          {high.map((par) => {
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
        <Flex mt="auto" gap={"1"} wrap={"wrap"}>
          {highplus.map((par) => {
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
