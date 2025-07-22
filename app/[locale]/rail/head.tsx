import { Badge, Box, Heading, Section } from "@radix-ui/themes";
import { getLocale, getTranslations } from "next-intl/server";

const RussianHero = () => {
  return (
    <>
      <Heading align={"center"} size={"2"} weight={"medium"} mt="6">
        Эффективные логистические схемы перевозок: сценарный
        <Badge color="pink">анализ платного отстоя</Badge> на цикличном рынке и
        многокритериальный <Badge color="pink">выбор лучших заявок</Badge>{" "}
      </Heading>
      <Heading size={"1"} weight={"light"} align={"center"} mt="6" color="gray">
        1. Загрузите заявки и дислокацию парка 2. Укажите требуемые ограничения.
        3. Получите расчет оптимального{" "}
        <Badge color="red">плана перевозок</Badge> и его регулярное обновление
      </Heading>
    </>
  );
};

const EnglishHero = () => {
  return (
    <>
      <Heading align={"center"} size={"2"} weight={"medium"} mt="6">
        Efficient transportation logistics schemes: scenario-based{" "}
        <Badge color="pink">paid idle time analysis</Badge> in a cyclical market
        and multi-criteria <Badge color="pink">best order selection</Badge>
      </Heading>
      <Heading size={"1"} weight={"light"} align={"center"} mt="6" color="gray">
        1. Upload orders and fleet location data 2. Set required constraints 3.
        Get the calculated optimal{" "}
        <Badge color="red">transportation plan</Badge> and its regular updates
      </Heading>
    </>
  );
};

export const Head = async () => {
  const t = await getTranslations();
  const locale = await getLocale();
  return (
    <Section id="index" pt={{ initial: "8vh", md: "15vh" }}>
      <Box maxWidth={"500px"} m="auto">
        <Heading align={"center"}>{t("title_rail_hero")}</Heading>
        {locale === "en" ? <EnglishHero /> : <RussianHero />}
      </Box>
    </Section>
  );
};
