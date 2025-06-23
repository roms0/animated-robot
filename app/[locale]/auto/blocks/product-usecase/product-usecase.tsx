import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import { Func } from "../../icons/func";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

const funcs = {
  time: { title: "минимизация времени" },
  range: { title: "минимизация расстояния" },
  cost: { title: "минимизация затрат" },
};

const pipes = {
  lm: { title: "последняя миля" },
  fm: { title: "первая миля" },
  ma: { title: "склад - склад" },
};

const services = {
  speeds: { title: "оптимальные скорости" },
  cargo: { title: "раскладка груза" },
  park: { title: "дозаявка транспорта" },
  cluster: { title: "кластеризация" },
};

const results = {
  routing: { title: "оптимальные маршруты" },
  analytics: { title: "сравнительный анализ" },
  speeding: { title: "слой скоростей" },
  topology: { title: "оптимальная привязка объектов" },
  flowing: { title: "оптимальные грузовые потоки" },
};

const data = [
  {
    tools: {
      pipe: pipes.fm,
      func: funcs.cost,
      services: [],
    },
    results: [results.routing],
    cases: [
      { title: "наименее затратный развоз возвратов" },
      { title: "возврат тары" },
    ],
  },
  {
    tools: {
      pipe: pipes.lm,
      func: funcs.range,
      services: [],
    },
    results: [results.routing],
    cases: [{ title: "доставка товара малолитражным траспортом" }],
  },
  {
    tools: {
      pipe: pipes.ma,
      func: funcs.time,
      services: [services.cargo],
    },
    results: [results.flowing, results.analytics],
    cases: [{ title: "анализ потоков магистрали за месяц" }],
  },
  {
    tools: {
      pipe: pipes.lm,
      func: funcs.time,
      services: [services.park],
    },
    results: [results.routing, results.analytics],
    cases: [{ title: "поиск оптимальной стратегии расширения парка" }],
  },
  {
    tools: {
      pipe: pipes.lm,
      func: funcs.cost,
      services: [services.cargo, services.cluster],
    },
    results: [results.routing, results.analytics, results.topology],
    cases: [{ title: "оптимизация логистики для перевозки хрупкой тары" }],
  },
];

export const ProductUsecase = () => {
  return (
    <Section>
      <Flex justify={"center"} align={"center"} gap={"4"} wrap={"wrap"}>
        <Heading align={"center"} size={"2"} weight={"medium"}>
          надёжный путь решения
        </Heading>
        <Button variant="ghost" color="gray">
          <ExternalLinkIcon />
          Демонстрационная версия
        </Button>
      </Flex>
      <Grid
        justify={"center"}
        gap={"3"}
        gapY={"10vh"}
        mt="9"
        columns={{ initial: "1", md: "2" }}
      >
        {data.map((item) => {
          return (
            <Box>
              <Flex align={"start"} gapX={"4"} gapY={"1"} wrap={"wrap"}>
                <Text size={"1"} weight={"medium"}>
                  задача
                </Text>{" "}
                {item.cases.map((cas) => {
                  return (
                    <Badge key={cas.title} color="blue">
                      {cas.title}
                    </Badge>
                  );
                })}
              </Flex>

              <Flex mt="4" align={"start"} gapX={"1"} gapY={"1"} wrap={"wrap"}>
                <Text size={"1"} weight={"medium"}>
                  пайплайн
                </Text>{" "}
                <Badge color="gray" size={"1"}>
                  {item.tools.pipe.title}
                </Badge>{" "}
                <Text size={"1"} weight={"bold"}>
                  +
                </Text>{" "}
                <Func size={16} />
                <Badge color="gray" size={"1"}>
                  {item.tools.func.title}
                </Badge>
                {item.tools.services.at(0)?.title ? (
                  <>
                    {" "}
                    <Text size={"1"} weight={"medium"}>
                      + сервисы
                    </Text>{" "}
                    {item.tools.services.map((s) => {
                      return (
                        <Badge key={s.title} color="sky">
                          {s.title}
                        </Badge>
                      );
                    })}
                  </>
                ) : null}
              </Flex>

              {/* RESULTS */}
              <Flex mt="4" align={"start"} gapX={"1"} gapY={"1"} wrap={"wrap"}>
                <Text size={"1"} weight={"medium"}>
                  результаты
                </Text>{" "}
                {item.results.map((result) => {
                  return (
                    <Badge key={result.title} color="violet">
                      {result.title}
                    </Badge>
                  );
                })}
              </Flex>
            </Box>
          );
        })}
      </Grid>
    </Section>
  );
};
