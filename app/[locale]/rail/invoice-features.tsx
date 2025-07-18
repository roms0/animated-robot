import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";

export const InvoiceFeatures = () => {
  return (
    <Grid
      columns={"2"}
      mt="6"
      m="auto"
      height={"100%"}
      width={"900px"}
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
            <span className="farfetch">
              {" "}
              Оптимальные логистические схемы или отстой
            </span>{" "}
            с учетом установленных параметров и задачи максимизации доходности
          </Text>
        </Box>
      </Box>
      <Flex
        gap="5"
        direction={"column"}
        position={"relative"}
        style={{
          border: "1px dashed var(--pink-10)",
          borderRadius: "var(--radius-2)",
        }}
        p="2"
      >
        <Badge
          variant="solid"
          color="pink"
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
            <span className="farfetch">Оценка стоимости выполнения заявки</span>{" "}
            Автоматически определение эффективной ставки за перевозку и
            доходности в схеме
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">Заадресовка</span> Точная рекомендация
            сервиса оптимальной станции заадресовки для вагона в ближнем и
            дальнем подходе
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">Многокритериальный рейтинг</span>{" "}
            грузовладельцев
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};
