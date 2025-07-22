import { Flex, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Dashboard = () => {
  const t = useTranslations();
  return (
    <Flex gap={"6"} direction={"column"}>
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
  );
};
