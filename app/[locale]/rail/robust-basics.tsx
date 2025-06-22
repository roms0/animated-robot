import { Badge, Box, Button, Card, Flex, Grid, Text } from "@radix-ui/themes";
import { ContainerIcon } from "./container";

const invoices = [
  { title: "Расчёт рейсов с указанным уровнем маржи" },
  { title: "Оптимальная загрузка полувагонов" },
  { title: "Оптимальная загрузка платформ" },
];

const parameters = [
  { title: "Число полувагонов 75т" },
  { title: "Число полувагонов 69.5т" },
  { title: "Фунтовая загрузка платформы" },
  { title: "Допустимое кол-во вагоноотправок" },
  { title: "Стоимость вагона" },
];

const util = [{ title: "Сократить траты на порожний тариф" }];

const risks = [
  { title: "В срок ли компания осуществляет погрузку?" },
  { title: "Есть ли задолженности" },
];

export const RobustBasics = () => {
  return (
    <Box>
      <Card>
        <Flex gap={"4"} wrap={"wrap"}>
          <Badge size={"3"} color="sky">
            Полувагоны
          </Badge>
          <Badge size={"3"} color="sky">
            Платформы
          </Badge>
        </Flex>
        <Box mt="4">
          <Text as="div" weight="bold">
            Повышение дохода с вагона
          </Text>
          <Text as="div" weight={"medium"} size={"2"} color="gray">
            Расчёт оптимальной загрузки и рейсов
          </Text>
        </Box>

        {/* parameters */}
        <Box mt="4">
          <Text size={"1"} weight={"bold"}>
            детальная настройка пайплайна расчёта{" "}
            <Button radius="large" variant="surface" color="sky" size={"1"}>
              все 26 параметров
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

        {/* miles */}
        <Flex mt="4" align={"center"} gap={"2"}>
          <ContainerIcon />
          <Text size={"1"} weight={"bold"}>
            брокер заявок
          </Text>
        </Flex>
        <Flex mt="2" gap={"2"} wrap={"wrap"}>
          {invoices.map((mile) => {
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
            прогнозирование стоимости
          </Text>
        </Flex>
        <Flex mt="2" gap={"2"} wrap={"wrap"}>
          {util.map((high) => {
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
        <Flex mt="8" gap={"4"} wrap={"wrap"}>
          <Badge size={"3"} color="violet">
            Закрытие рисков
          </Badge>
        </Flex>
        <Flex mt="4" align={"center"} gap={"2"}>
          <ContainerIcon />
          <Text size={"1"} weight={"bold"}>
            рейтинг грузовладельца
          </Text>
          <Badge color="gray" size={"1"}>
            сводный рейтинг саплаеров
          </Badge>
        </Flex>
        <Flex mt="2" gap={"2"} wrap={"wrap"}>
          {risks.map((mile) => {
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
      </Card>
    </Box>
  );
};
