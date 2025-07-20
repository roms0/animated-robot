import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="keyboard"
            src={"/features/keyboard.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature managing title")}.</span>{" "}
            {t("feature managing desc")}.
          </Text>
        </Flex>
        <Flex align={"center"} gap={"2"}>
          <Image width={60} height={60} alt="pie" src={"/features/pie.png"} />
          <Text size={"2"}>
            <span className="farfetch">{t("feature metrics title")}.</span>{" "}
            {t("feature metrics desc")}.
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
};
