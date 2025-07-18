import { Badge, Box, Flex, Grid, Section, Text } from "@radix-ui/themes";

export const StoreFeatures = () => {
  return (
    <Grid
      columns={"1"}
      mt="6"
      m="auto"
      height={"100%"}
      width={"450px"}
      gap={"4"}
    >
      <Flex
        gap="5"
        direction={"column"}
        position={"relative"}
        height={"100%"}
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
            <span className="farfetch">Оптимальное зонирование</span>{" "}
            Сбалансированные зоны доставки для оптимизации работы склада
          </Text>
        </Box>
      </Flex>
    </Grid>
  );
};
