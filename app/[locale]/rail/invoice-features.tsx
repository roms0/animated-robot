import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

const invoice = [
  "param max revenue",
  "param fleet type",
  "param fleet pos",
  "param idle cost",
  "param idle capacity",
  "param fleet state",
  "param dispatches",
  "param fleet speed",
  "param load unload idle time",
];

const invoiceplus = [
  "param debit rate",
  "param approachment",
  "param payment rank",
  "param task size",
  "param dispatch fullfillment",
];

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
        <Flex align={"center"} gap={"2"}>
          <Image width={60} height={60} alt="tree" src={"/features/tree.png"} />
          <Text size={"2"}>
            <span className="farfetch">{t("feature schema title")}.</span>{" "}
            {t("feature schema desc")}.
          </Text>
        </Flex>
        <Flex mt="5" gap={"1"} wrap={"wrap"}>
          {invoice.map((par) => {
            return (
              <Box key={par} className="parameter-box">
                {t(par)}
              </Box>
            );
          })}
        </Flex>
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

        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="addition"
            src={"/features/addition.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature assessment title")}.</span>{" "}
            {t("feature assessment desc")}.
          </Text>
        </Flex>
        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="station"
            src={"/features/station.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature assignment title")}.</span>{" "}
            {t("feature assignment desc")}.
          </Text>
        </Flex>
        <Flex align={"center"} gap={"2"}>
          <Image
            width={60}
            height={60}
            alt="ranking"
            src={"/features/ranking.png"}
          />
          <Text size={"2"}>
            <span className="farfetch">{t("feature ranking title")}.</span>{" "}
            {t("feature ranking desc")}.
          </Text>
        </Flex>
        <Flex gap={"1"} wrap={"wrap"}>
          {invoiceplus.map((par) => {
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
