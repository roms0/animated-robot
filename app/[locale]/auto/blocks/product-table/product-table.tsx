import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
} from "@radix-ui/themes";
import { ContainerIcon } from "../../icons/container";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Timer } from "../../icons/timer";
import { Gold } from "../../icons/gold";

export const ProductTable = () => {
  return (
    <Grid mt="10vh" columns={{ initial: "1", md: "2" }} gap="2">
      <Box className="elevated-card" gridRowStart={"1"} gridRowEnd={"3"}>
        <Flex align={"center"} wrap={"wrap"} gap={"2"}>
          <ContainerIcon size={16} />
          <Heading size={"2"} weight={"bold"}>
            Список оптимальных маршрутов для груза{" "}
            <span className="farfetch">любого типа</span>{" "}
          </Heading>
        </Flex>

        <Box mt="4" className="description-box">
          Задача сервисов олучить от вас постановку задачи и как можно скорее
          отдать самый оптимальный список маршрутов. Если выполнить задачу в
          указанные рамки невозможно, то сервисы предложат оптимальную
          балансировку ресурсов, после которой это станет реально.
        </Box>
        <Flex wrap={"wrap"} mt="4" gap={"8"}>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              1. Функция оптимизации{" "}
              <Badge color="gray" radius="large">
                api
              </Badge>{" "}
              <Badge color="gray" radius="large">
                ui
              </Badge>
            </Heading>
            <Box mt="2" className="description-box">
              Быстро получайте информацию о том, как следует объезжать точки.
              Подходит как для задач: посчитать здесь и сейчас, так и для
              долгосрочных решений.
            </Box>
            <Box mt="2">
              <Text size={"2"}>
                Установите приоритет для задачи: максимальная скорость,
                минимальное время или максимальная экономия.
              </Text>
            </Box>
            <Flex mt="2" gap={"1"} wrap={"wrap"}>
              <Box>
                <Badge color="plum">скорость</Badge>{" "}
                <Text size={"2"} weight={"medium"}>
                  2 минуты на расчёт из{" "}
                  <span className="farfetch">90 точек</span>
                </Text>
              </Box>
              <Box>
                <Badge color="plum">эффективность</Badge>{" "}
                <Text size={"2"} weight={"medium"}>
                  сокращение расходов <span className="farfetch">до 12%</span>
                </Text>
              </Box>
            </Flex>
            <Button mt="4" size="1">
              <ExternalLinkIcon /> демонстрация
            </Button>
          </Card>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              2. Дозаявка{" "}
              <Badge color="gray" radius="large">
                api
              </Badge>{" "}
              <Badge>про</Badge>
            </Heading>
            <Box mt="2">
              <Text size={"2"}>
                Жесткие условия а ресурсов мало? Возможно стоит рассмотреть
                выгодное усиление. Вы получите список маршрутов с точной
                аналитикой, сколько будет стоить дозаявка и где она необходима.
              </Text>
            </Box>
          </Card>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              3. Раскладка{" "}
              <Badge color="gray" radius="large">
                api
              </Badge>{" "}
              <Badge radius="large">про</Badge>
            </Heading>
            <Box mt="2">
              <Text size={"2"}>
                Если в условии задачи есть груз, который требует специальных
                условий транспортировки, список маршрутов будет составлен с
                учётом этих факторов.
              </Text>
            </Box>
          </Card>
        </Flex>
      </Box>

      <Box className="elevated-card">
        <Flex wrap={"wrap"} align={"center"} gap={"2"}>
          <Timer size={16} />
          <Heading size={"2"} weight={"bold"}>
            Аналитика+ для маршрутов
          </Heading>
        </Flex>
        <Box mt="4" className="description-box">
          Сервисы аналитики работают с рассчитаннымии маршрутами, они не требуют
          загрузки дополнительных данных.
        </Box>
        <Grid columns={{ initial: "1", md: "2" }} mt="4" gap={"2"}>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              1. Скорость{" "}
              <Badge color="gray" radius="large">
                api
              </Badge>{" "}
              <Badge radius="large">про</Badge>
            </Heading>
          </Card>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              2. Топливные карты{" "}
              <Badge color="gray" radius="large">
                api
              </Badge>{" "}
              <Badge radius="large">про</Badge>
            </Heading>
          </Card>
        </Grid>
      </Box>

      <Box className="elevated-card">
        <Flex wrap={"wrap"} align={"center"} gap={"2"}>
          <Gold size={16} />
          <Heading size={"2"} weight={"bold"}>
            Оптимальные зоны доставки для складов
          </Heading>
        </Flex>

        <Flex wrap={"wrap"} mt="4" gap={"6"}>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              1. Сервис зонирования
              <Badge color="gray" radius="large">
                api
              </Badge>{" "}
              <Badge radius="large">про</Badge>
            </Heading>

            <Box mt="2">
              <Text size={"2"}>
                Наше решение для крупных объектов складской логистики с
                несколькими воротами, большим потоков транспорта и значительным
                количеством точек обслуживания.
              </Text>
            </Box>
            <Box mt="6" className="description-box">
              Вы сможете быстро получить группы точек, которые будет выгодно
              обслуживать вместе.
            </Box>
          </Card>
        </Flex>
      </Box>
    </Grid>
  );
};
