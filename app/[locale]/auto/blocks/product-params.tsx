import { Box, Flex, Section, Text } from "@radix-ui/themes";

export const ProductParams = () => {
  return (
    <Section>
      <Box>
        <Text weight={"medium"} size={"2"}>
          для детализации задачи 50+ параметров, среди которых:{" "}
        </Text>
      </Box>
      <Flex gap={"1"} mt="2" wrap={"wrap"}>
        <Box className="parameter-box">
          Объем кузова м<sup>3</sup>
        </Box>
        <Box className="parameter-box">Количество выездов</Box>
        <Box className="parameter-box">VIN номер</Box>
        <Box className="parameter-box">Длительность смены</Box>
        <Box className="parameter-box">Грузоподъемность в тоннах</Box>
        <Box className="parameter-box">Максимальное число выездов</Box>
        <Box className="parameter-box">VIN номер</Box>
        <Box className="parameter-box">Список точек доставки</Box>
        <Box className="parameter-box">
          Длительность погрузочно-разгрузочной работы
        </Box>
        <Box className="parameter-box">Кубатура транспорта на воротах</Box>
      </Flex>
    </Section>
  );
};
