import { Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { ContainerIcon } from "./container";

const miles = [
  { title: "Развезти возвраты" },
  { title: "Посчитать кратчайшие направления на участке" },
  { title: "Спрогнозировать самые быстрые маршруты на будущий месяц" },
];

const highway = [
  { title: "Найти оптимальные потоки" },
  { title: "Перераспределить поток товаров с объекта" },
];

const parameters = [
  { title: "Координаты" },
  { title: "Количество выездов" },
  { title: "Максимальная загрузка" },
  { title: "Время работы склада" },
  { title: "Приоритет" },
  { title: "Максимальная продолжительность рейса" },
];

export const RobustBasics = () => {
  return (
    <Box>
      <Card>
        <Flex gap={"4"} wrap={"wrap"}>
          <Badge size={"3"} color="sky">
            Начните здесь
          </Badge>
          <Badge size={"3"} color="gray">
            90% кейсов
          </Badge>
        </Flex>
        <Box mt="4">
          <Text as="div" weight="bold">
            Задачи оптимизации логистики
          </Text>
          <Text as="div" weight={"medium"} size={"2"} color="gray">
            Маршрутизация точек доставки и отправления
          </Text>
        </Box>

        {/* miles */}
        <Flex mt="4" align={"center"} gap={"2"}>
          <ContainerIcon />
          <Text size={"1"} weight={"bold"}>
            миля
          </Text>
        </Flex>
        <Flex mt="2" gap={"2"} wrap={"wrap"}>
          {miles.map((mile) => {
            return (
              <Card key={mile.title} asChild>
                <Flex p={"1"} pt="0" pl="3" pr="3" width={"fit-content"}>
                  <Text weight={"regular"} size={"1"}>
                    {mile.title}
                  </Text>
                </Flex>
              </Card>
            );
          })}
        </Flex>
        {/* highways */}
        <Flex mt="4" align={"center"} gap={"2"}>
          <ContainerIcon />
          <Text size={"1"} weight={"bold"}>
            магистраль
          </Text>
        </Flex>
        <Flex mt="2" gap={"2"} wrap={"wrap"}>
          {highway.map((high) => {
            return (
              <Card key={high.title} asChild>
                <Flex p={"1"} pt="0" pl="3" pr="3" width={"fit-content"}>
                  <Text weight={"regular"} size={"1"}>
                    {high.title}
                  </Text>
                </Flex>
              </Card>
            );
          })}
        </Flex>

        <Box mt="6">
          <Text size={"1"} weight={"medium"}>
            1. Расчёт требует csv файлов
          </Text>
        </Box>
        <Box>
          <Text size={"1"} weight={"medium"}>
            2. Выполнение расчёта занимает ~ 12 минут
          </Text>
        </Box>
        <Box>
          <Text weight={"medium"} size={"1"}>
            3. Можно загрузить до 300 точек и 5 тыс. автомобилей
          </Text>
        </Box>
        <Box>
          <Text weight={"medium"} size={"1"}>
            4. Предусмотрен учёт трафика и топливной инфраструктуры дорожной
            сети
          </Text>
        </Box>

        {/* parameters */}
        <Box mt="4">
          <Text size={"1"} weight={"bold"}>
            детальная настройка пайплайна расчёта{" "}
            <Button radius="large" variant="surface" color="sky" size={"1"}>
              все 50 параметров
            </Button>
          </Text>
        </Box>
        <Flex mt="2" gap={"2"} wrap={"wrap"}>
          {parameters.map((parameter) => {
            return (
              <Card key={parameter.title} asChild>
                <Flex p={"1"} pt="0" pl="3" pr="3" width={"fit-content"}>
                  <Text weight={"medium"} size={"1"}>
                    {parameter.title}
                  </Text>
                </Flex>
              </Card>
            );
          })}
        </Flex>
      </Card>
    </Box>
  );
};
