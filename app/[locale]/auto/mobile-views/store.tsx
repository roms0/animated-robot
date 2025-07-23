import { Box, Flex, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

const store = [
  "param points per cluster",
  "param range form cluster",
  "param gates count",
  "param time slots",
];

export const Store = () => {
  const t = useTranslations();
  return (
    <Flex gap={"6"} direction={"column"}>
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
        {store.map((par) => {
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
