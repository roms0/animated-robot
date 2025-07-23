import { Box, Flex, Text } from "@radix-ui/themes";
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

export const Mile = () => {
  const t = useTranslations();
  return (
    <Flex gap={"6"} direction={"column"}>
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
      <Flex gap={"1"} wrap={"wrap"}>
        {routing.map((par) => {
          return (
            <Box key={par} className="parameter-box">
              {t(par)}
            </Box>
          );
        })}
        {routingplus.map((par) => {
          return (
            <Box key={par} className="parameter-box">
              {t(par)}
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};
