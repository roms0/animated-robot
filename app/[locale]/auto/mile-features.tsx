import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";

export const MileFeatures = () => {
  return (
    <Grid
      columns={"2"}
      mt="6"
      m="auto"
      width={"900px"}
      height={"100%"}
      gap={"4"}
    >
      <Box className="elevated-card">
        <Flex gap={"3"} wrap={"wrap"}>
          <Box className="parameter-box">
            Функция<sup></sup> оптимизации
          </Box>
          <Box className="parameter-box">
            м<sup>3</sup> на точку
          </Box>
          <Box className="parameter-box">
            Объем<sup></sup> кузова
          </Box>
        </Flex>
        <Box mt="5">
          <Text size={"2"}>
            <span className="farfetch">Маршрутизация</span> Оптимальные маршруты
            между складом и вашими точками доставки
          </Text>
        </Box>
      </Box>
      <Flex
        gap="5"
        direction={"column"}
        position={"relative"}
        style={{
          border: "1px dashed var(--sky-10)",
          borderRadius: "var(--radius-2)",
        }}
        p="2"
      >
        <Badge
          variant="solid"
          style={{ position: "absolute", top: "-10px", right: "-20px" }}
        >
          Путь.Про
        </Badge>
        <Flex gap={"3"} wrap={"wrap"}>
          <Box className="parameter-box">
            Функция<sup></sup> оптимизации
          </Box>
          <Box className="parameter-box">
            м<sup>3</sup> на точку
          </Box>
          <Box className="parameter-box">
            Объем<sup></sup> кузова
          </Box>
        </Flex>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">Особый груз</span> Оптимизация доставки
            стандартного, а также хрупкого и негабаритного груза
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">Дозаявка</span> Подскажем, для какой
            задачи будет выгодно расширить парк
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">Альтернативные точки</span>{" "}
            Интеллектуальная привязка существующих точек к складу отправления
            или назначения
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};
