import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

export const Miles = () => {
  return (
    <Section mt="20vh">
      <Flex align={"center"} direction={"column"} gap={"2"}>
        <Box>
          <Heading weight={"bold"}>Последняя миля и Первая миля</Heading>
        </Box>
        <Box>
          <Text align={"center"} weight={"regular"} color="gray">
            аналитика и создание маршрутизации между точками
            доставки/отправления и складами.
          </Text>
        </Box>
      </Flex>
      <Grid mt="8" columns={{ initial: "1", md: "2" }} gap={"4"}>
        <Box className="elevated-card">
          <Heading align={"center"} size={"3"} weight={"medium"}>
            Параметры и ограничения
          </Heading>
          <Box mt="4">
            <Flex direction={"column"} gap={"2"}>
              <Box className="description-box" p="4">
                <Heading size={"1"} weight={"medium"}>
                  Критерий оптимизации: скорость, стоимость, расстояние
                </Heading>
              </Box>
              <Box className="description-box" p="4">
                <Heading size={"1"} weight={"medium"}>
                  Настроки последней мили
                </Heading>
                <Flex mt="2" gap="2" wrap={"wrap"}>
                  <Box className="parameter-box">Время погрузки</Box>
                  <Box className="parameter-box">Длительность смены</Box>
                  <Box className="parameter-box">Кол-во точек в маршруте</Box>
                </Flex>
              </Box>
              <Box className="description-box" p="4">
                <Heading size={"1"} weight={"medium"}>
                  Особенный груз <Badge>Про</Badge>
                </Heading>
                <Box mt="2">
                  <Text size={"1"}>
                    Перевозите груз, требующий особых условий транспортировки.
                    Вероятно, это скажется на решении задачи.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box className="elevated-card">
          <Heading align={"center"} size={"3"} weight={"medium"}>
            Результат
          </Heading>
          <Box mt="4">
            <Flex direction={"column"} gap={"2"}>
              <Box className="description-box" p="4">
                <Heading size={"1"} weight={"medium"}>
                  Список самых оптимальных маршрутов с учётом ограничений.
                </Heading>
                <Box mt="2">
                  <Text size={"1"}>
                    Важно знать: 1. Чем больше параметров мы получим, тем точнее
                    будет решение. 2. Если ограничения слишком строгие, решения
                    может не быть.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Heading mt="6" align={"center"} size={"3"} weight={"medium"}>
            Дополнительные сведения
          </Heading>
          <Box mt="4">
            <Flex direction={"column"} gap={"2"}>
              <Box className="description-box" p="4">
                <Heading size={"1"} weight={"medium"}>
                  Учёт дозаявки <Badge>Про</Badge>
                </Heading>
                <Box mt="2">
                  <Text size={"1"}>
                    Если задачу можно решить эффективнее, привлекая
                    дополнительные ресурсы, вы узнаете об этом.
                  </Text>
                </Box>
              </Box>
              <Box className="description-box" p="4">
                <Heading size={"1"} weight={"medium"}>
                  Предварительная отвязка точек <Badge>Про</Badge>
                </Heading>
                <Box mt="2">
                  <Text size={"1"}>
                    Мы предложим более эффективную привязку точек
                    отправления/доставки к складам на основе методов машинного
                    обучения и информации на дорогах.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Grid>
    </Section>
  );
};
