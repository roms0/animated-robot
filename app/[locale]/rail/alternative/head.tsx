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
          ml оптимизация железнодорожной логистики оператора
        </Heading>
        <Heading align={"center"} size={"2"} weight={"medium"} mt="6">
          Эффективные логистические схемы перевозок: сценарный
          <Badge color="pink">анализ платного отстоя</Badge> на цикличном рынке
          и многокритериальный <Badge color="pink">выбор лучших заявок</Badge>{" "}
        </Heading>
        <Heading
          size={"1"}
          weight={"light"}
          align={"center"}
          mt="6"
          color="gray"
        >
          1. Загрузите заявки планируемого периода и дислокацию парка 2. Укажите
          требуемые ограничения. 3. Получите расчет оптимального{" "}
          <Badge color="red">плана перевозок</Badge> и его регулярное обновление
        </Heading>
      </Box>
    </Section>
  );
};
