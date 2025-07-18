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
          ml оптимизация контура автомобильной логистики
        </Heading>
        <Heading align={"center"} size={"2"} weight={"medium"} mt="6">
          Достигайте лучших результатов при решении задач <Badge>первой</Badge>{" "}
          и <Badge>последней мили</Badge>, <Badge>магистрали</Badge> и{" "}
          <Badge>зонирования</Badge> складов
        </Heading>
        <Heading
          size={"1"}
          weight={"light"}
          align={"center"}
          mt="6"
          color="gray"
        >
          1. Загрузите точки доставки 2. Установите параметры 3. Получите
          результат через <Badge color="red">1 минуту</Badge>
        </Heading>
      </Box>
    </Section>
  );
};
