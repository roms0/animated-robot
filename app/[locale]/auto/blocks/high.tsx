import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

export const High = () => {
  return (
    <Section mt="15vh" id="high">
      <Flex align={"center"} direction={"column"} gap={"2"}>
        <Box>
          <Heading weight={"bold"}>Магистраль</Heading>
        </Box>
        <Box>
          <Text align={"center"} weight={"regular"} color="gray">
            аналитика и создание маршрутизации между складами и сортировочными
            центрами
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
                  Настройки магистрали
                </Heading>
                <Flex mt="2" gap="2" wrap={"wrap"}>
                  <Box className="parameter-box">5+ параметров</Box>
                  <Box className="parameter-box">
                    Сколько привезти на склад?
                  </Box>
                  <Box className="parameter-box">Сколько есть на складе?</Box>
                  <Box className="parameter-box">Вместимость склада</Box>
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
                <Flex mt="2" gap="2" wrap={"wrap"}>
                  <Box className="parameter-box">5+ параметров</Box>
                  <Box className="parameter-box">Запрет на погрузку наверх</Box>
                  <Box className="parameter-box">
                    Только вертикальное размещение
                  </Box>
                  <Box className="parameter-box">Д/Ш/В</Box>
                </Flex>
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
            <Heading mt="6" align={"center"} size={"3"} weight={"medium"}>
              Дополнительные сведения
            </Heading>
            <Box mt="4">
              <Flex direction={"column"} gap={"2"}>
                <Box className="description-box" p="4">
                  <Heading size={"1"} weight={"medium"}>
                    Слой АЗС <Badge>Про</Badge>
                  </Heading>
                  <Box mt="2">
                    <Text size={"1"}>
                      Магистраль предполагает развоз на длительные дистанции.
                      Всегда знайте когда и где лучше заправляться.
                    </Text>
                  </Box>
                </Box>
                <Box className="description-box" p="4">
                  <Heading size={"1"} weight={"medium"}>
                    Слой оптимальных скоростей <Badge>Про</Badge>
                  </Heading>
                  <Box mt="2">
                    <Text size={"1"}>
                      Скорости для водителей: безопасность, мотивация и
                      синхронизация со складами.
                    </Text>
                  </Box>
                </Box>
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
              </Flex>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Section>
  );
};
