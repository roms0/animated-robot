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
    <Section>
      <Flex align={"center"} direction={"column"} gap={"2"}>
        <Box>
          <Heading size={"2"} weight={"bold"}>
            магистраль
          </Heading>
        </Box>
        <Box>
          <Heading size={"1"} weight={"regular"} color="gray">
            аналитика и создание маршрутизации между складами и сортировочными
            центрами
          </Heading>
        </Box>
      </Flex>
      <Grid mt="6" columns={{ initial: "1", md: "2" }} gap={"4"}>
        <Box className="elevated-card">
          <Heading align={"center"} size={"2"} weight={"medium"}>
            параметры и ограничения
          </Heading>
          <Box mt="4">
            <Flex direction={"column"} gap={"2"}>
              <Box className="description-box" p="4">
                <Heading size={"1"} weight={"medium"}>
                  критерий оптимизации: скорость, стоимость, расстояние
                </Heading>
              </Box>
              <Box className="description-box" p="4">
                <Heading size={"1"} weight={"medium"}>
                  до 20 параметров объектов
                </Heading>
              </Box>
              <Box className="description-box" p="4">
                <Heading size={"1"} weight={"medium"}>
                  5 параметров особенного груза <Badge>Про</Badge>
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
          <Heading align={"center"} size={"2"} weight={"medium"}>
            результат
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
      </Grid>
    </Section>
  );
};
