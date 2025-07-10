import {
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import classes from "./head.module.css";

export const Head = () => {
  return (
    <Section id="index" pt="15vh">
      <Box maxWidth={"500px"} m="auto">
        <Heading align={"center"}>
          ⚡ ml оптимизация затрат оператора парка вагонов
        </Heading>
        <Heading align={"center"} size={"2"} weight={"medium"} mt="6">
          отбирайте <Badge color="pink">лучшие заявки</Badge> от
          <Badge color="pink">грузовладельцев</Badge>, подключайте интеграции
          для своевременной <Badge color="pink">заадресовки вагона</Badge>
        </Heading>
        <Heading
          size={"1"}
          weight={"light"}
          align={"center"}
          mt="6"
          color="gray"
        >
          1. Загрузите заявки и дислокацию 2. Получайте{" "}
          <Badge color="red">ежедневные</Badge> обновления
        </Heading>
      </Box>
    </Section>
  );
};
