import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";

export const DashboardFeatures = () => {
  return (
    <Grid
      columns={"1"}
      mt="6"
      m="auto"
      width={"450px"}
      gap={"4"}
      height={"100%"}
    >
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
            <span className="farfetch">Центр управления парком</span>:
            автоматизация приема и обработки заявок, ЭДО, формирование плана и
            расчет ценовых условий
          </Text>
        </Box>
        <Box>
          <Text size={"2"}>
            <span className="farfetch">Апробированные ключевые метрики</span>{" "}
            оценки эффективности работы парка
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};
