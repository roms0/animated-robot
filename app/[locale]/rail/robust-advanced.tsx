import { Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { ContainerIcon } from "./container";

const speeds = [
  { title: "В срок ли компания осуществляет погрузку?" },
  { title: "Есть ли задолженности" },
];

const cargo = [
  { title: "Доставка хрупких товаров" },
  { title: "Крупногабаритные перевозки" },
];

const clusters = [{ title: "Насколько эффективны зоны обслуживания складов?" }];

const parameters = [
  { title: "Количество складов" },
  { title: "Запрет на укладку тары наверх" },
  { title: "Строго индивидуальный проезд" },
  { title: "ДШВ" },
];

export const RobustAdvaced = () => {
  return (
    <Box>
      <Card>
        <Flex gap={"4"} wrap={"wrap"}>
          <Badge size={"3"} color="violet">
            Закрытие рисков
          </Badge>
        </Flex>
        <Box mt="4">
          <Text as="div" weight="bold">
            Дополнительные сервисы
          </Text>
          <Text as="div" weight={"medium"} size={"2"} color="gray">
            Можно подключить в пайплайн
          </Text>
        </Box>

        {/* miles */}
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
          {speeds.map((mile) => {
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
            раскладка груза
          </Text>
        </Flex>
        <Flex mt="2" gap={"2"} wrap={"wrap"}>
          {cargo.map((high) => {
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

        {/* parameters */}
        <Flex mt="4" align={"center"} gap={"2"}>
          <ContainerIcon />
          <Text size={"1"} weight={"bold"}>
            кластеризация
          </Text>
          <Badge color="gray" size={"1"}>
            новое разбиение объектов
          </Badge>
        </Flex>
        <Flex mt="2" gap={"2"} wrap={"wrap"}>
          {clusters.map((parameter) => {
            return (
              <Card key={parameter.title} asChild>
                <Flex p={"1"} pt="0" pl="3" pr="3" width={"fit-content"}>
                  <Text weight={"regular"} size={"1"}>
                    {parameter.title}
                  </Text>
                </Flex>
              </Card>
            );
          })}
        </Flex>

        <Box mt="6">
          <Text size={"1"} weight={"medium"}>
            1. Базовый пайплайн работает с дополнительными параметрами
          </Text>
        </Box>

        {/* parameters */}
        <Box mt="4">
          <Text size={"1"} weight={"bold"}>
            дополнительные параметры{" "}
            <Button radius="large" variant="surface" color="sky" size={"1"}>
              все 10 параметров
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
