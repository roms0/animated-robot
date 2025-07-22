import { Flex, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Highway = () => {
  const t = useTranslations();
  return (
    <Flex gap={"6"} direction={"column"}>
      <Flex align={"center"} gap={"2"}>
        <Image width={60} height={60} alt="shelf" src={"/features/shelf.png"} />
        <Text size={"2"}>
          <span className="farfetch">{t("feature highway title")}.</span>{" "}
          {t("feature highway desc")}.
        </Text>
      </Flex>
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
    </Flex>
  );
};
