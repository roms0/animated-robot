import { Flex, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Invoice = () => {
  const t = useTranslations();
  return (
    <Flex gap={"6"} direction={"column"}>
      <Flex align={"center"} gap={"2"}>
        <Image width={60} height={60} alt="tree" src={"/features/tree.png"} />
        <Text size={"2"}>
          <span className="farfetch">{t("feature schema title")}.</span>{" "}
          {t("feature schema desc")}.
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
    </Flex>
  );
};
