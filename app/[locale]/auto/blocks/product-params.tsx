import { Box, Flex, Heading, Section, Text } from "@radix-ui/themes";

export const ProductParams = () => {
  return (
    <Section>
      <Box className="elevated-card">
        <Heading size={"2"} weight={"bold"}>
          <span className="farfetch">50+ параметров</span> для детализации ваших
          задач
        </Heading>
        <Flex mt="4" gap={"2"} wrap={"wrap"}>
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
      </Box>
    </Section>
  );
};
