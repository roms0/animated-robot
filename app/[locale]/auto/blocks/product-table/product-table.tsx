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
    <Grid
      mt="10vh"
      columns={{ initial: "1", md: "2" }}
      maxWidth={"1100px"}
      gap="4"
    >
      <Box className="elevated-card" gridRowStart={"1"} gridRowEnd={"3"}>
        <Flex align={"center"} wrap={"wrap"} gap={"2"}>
          <ContainerIcon size={22} />
          <Heading size={"3"} weight={"bold"}>
            Маршрутизация <span className="farfetch">всех типов</span> грузов
          </Heading>
        </Flex>

        <Flex wrap={"wrap"} mt="6" gap={"4"}>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              1. Функция оптимизации
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
                <Badge color="orange">скорость</Badge>{" "}
                <Text size={"2"} weight={"medium"}>
                  2 минуты на расчёт из{" "}
                  <span className="farfetch">90 точек</span>
                </Text>
              </Box>
              <Box>
                <Badge color="orange">эффективность</Badge>{" "}
                <Text size={"2"} weight={"medium"}>
                  сокращение расходов <span className="farfetch">до 12%</span>
                </Text>
              </Box>
            </Flex>
            <Button mt="4" size="1" variant="outline">
              <ExternalLinkIcon /> демонстрация
            </Button>
          </Card>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              2. Дозаявка{" "}
              <Badge color="gray">
                <span className="farfetch">про</span>
              </Badge>
            </Heading>
            <Box mt="2">
              <Text size={"2"}>
                Модель подскажет, сколько единиц транспорта вам потребуется для
                выполнения вашего замысла.
              </Text>
            </Box>
          </Card>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              3. Раскладка{" "}
              <Badge color="gray">
                <span className="farfetch">про</span>
              </Badge>
            </Heading>
            <Box mt="2">
              <Text size={"2"}>
                Хрупкий или сверхгабаритный груз? Вы получите решение.
              </Text>
            </Box>
          </Card>
        </Flex>
      </Box>

      <Box className="elevated-card">
        <Flex wrap={"wrap"} align={"center"} gap={"2"}>
          <Timer size={22} />
          <Heading size={"3"} weight={"bold"}>
            Аналитика маршрута{" "}
            <Badge color="gray">
              <span className="farfetch">про</span>
            </Badge>
          </Heading>
        </Flex>
        <Box mt="6" className="description-box">
          Сервисы аналитики работают с рассчитаннымии маршрутами, они не требуют
          загрузки дополнительных данных.
        </Box>
        <Grid columns={{ initial: "1", md: "2" }} mt="4" gap={"2"}>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              1. Нормативные скорости
            </Heading>
          </Card>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              2. Топливные карты
            </Heading>
          </Card>
        </Grid>
      </Box>

      <Box className="elevated-card">
        <Flex wrap={"wrap"} align={"center"} gap={"2"}>
          <Gold size={22} />
          <Heading size={"3"} weight={"bold"}>
            Расчёт оптимальных зон доставки
          </Heading>
        </Flex>

        <Flex wrap={"wrap"} mt="6" gap={"6"}>
          <Card>
            <Heading size={"2"} weight={"medium"}>
              1. Сервис зонирования
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
