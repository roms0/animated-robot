import { Badge, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { ContainerIcon } from "../../icons/container";

const speeds = [
  { title: "Мотивационные политики" },
  { title: "Обеспечить соблюдение скоростного режима" },
];

const cargo = [
  { title: "Доставка хрупких товаров" },
  { title: "Крупногабаритные перевозки" },
];

const clusters = [
  { title: "Насколько эффективны зоны обслуживания складов?" },
  { title: "Какой размер флота будет оптимальным на следующий год?" },
];

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
            18% увеличение эффективности парка
          </Badge>
        </Flex>
        <Box mt="4">
          <Text as="div" weight="bold" size={"2"}>
            Задачи повышенной сложности
          </Text>
          <Text as="div" weight={"medium"} size={"2"} color="gray">
            Закрытие рисков и прогнозирование
          </Text>
        </Box>

        {/* speeds */}
        <Flex wrap={"wrap"} mt="8" align={"center"} gap={"2"}>
          <Flex align={"center"} gap={"1"}>
            <ContainerIcon />
            <ContainerIcon />
          </Flex>
          <Text size={"1"} weight={"bold"}>
            задачи расчёта скоростных нормативов
          </Text>
          <Badge color="gray">маршрутизация</Badge>
          <Badge color="cyan">слой скоростей</Badge>
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

        {/* cargo */}
        <Flex wrap={"wrap"} mt="8" align={"center"} gap={"2"}>
          <Flex align={"center"} gap={"1"}>
            <ContainerIcon />
            <ContainerIcon />
            <ContainerIcon />
          </Flex>
          <Text size={"1"} weight={"bold"}>
            задачи перемещения специальных грузов
          </Text>
          <Badge color="gray">маршрутизация</Badge>
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

        {/* scaling */}
        <Flex wrap={"wrap"} mt="8" align={"center"} gap={"2"}>
          <Flex align={"center"} gap={"1"}>
            <ContainerIcon />
            <ContainerIcon />
            <ContainerIcon />
          </Flex>
          <Text size={"1"} weight={"bold"}>
            задачи масштабирования
          </Text>
          <Badge color="gray">маршрутизация</Badge>
          <Badge color="cyan">новая топология</Badge>
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

        {/* parameters */}
        <Box mt="8">
          <Text size={"1"} weight={"bold"}>
            Запуск с дополнительными настройками{" "}
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
          <Button radius="large" variant="soft" color="sky" size={"1"}>
            к документации
          </Button>
        </Flex>
      </Card>
    </Box>
  );
};
