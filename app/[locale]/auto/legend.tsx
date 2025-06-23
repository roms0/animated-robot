import {
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import { Milestone } from "./icons/milestone";
import { DashIcon } from "@radix-ui/react-icons";
import "./legend.css";
import { Plugin } from "./icons/plugin";
import { Timer } from "./icons/timer";
import { ContainerIcon } from "./icons/container";

export const ProductLegend = () => {
  return (
    <Section>
      <Heading align={"center"} size={"4"} weight={"medium"}>
        простота и мощность
      </Heading>
      <Grid
        mt="6"
        columns={{ initial: "1fr", md: "450px 450px" }}
        gap={"4"}
        justify={"center"}
      >
        <Card asChild>
          <Box>
            <Flex direction={"column"} gap={"3"}>
              <Flex align={"center"} mb="3" gap={"2"} gapY={"1"} wrap={"wrap"}>
                <ContainerIcon size={22} />
                <Badge color="blue">от 5 тонн</Badge>
                <Badge color="blue">до 19.5 тонн</Badge>
                <Badge color="blue">
                  от 13<sup>м3</sup>
                </Badge>
                <Badge color="blue">
                  до 110<sup>м3</sup>
                </Badge>
                <Badge color="blue">Вся база грузов</Badge>
              </Flex>
              <Flex align={"center"} mb="3" gap={"2"} gapY={"1"} wrap={"wrap"}>
                <Timer size={22} />
                <Heading size={"2"} weight={"medium"}>
                  Сокращение времени доставки на{" "}
                  <span className="farfetch">10%</span>
                </Heading>
                <Heading size={"2"} weight={"medium"}>
                  Сокращение затрат на <span className="farfetch">10%</span>
                </Heading>
              </Flex>
            </Flex>
          </Box>
        </Card>
        <Card asChild>
          <Box>
            <Flex direction={"column"} gap={"3"}>
              <Flex align={"center"} mb="3" gap={"2"} gapY={"1"} wrap={"wrap"}>
                <Plugin size={22} />
                <Badge color="sky">пайплайн первой и последней мили</Badge>
                <Badge color="sky">4 дополнительных сервиса</Badge>
                <Badge color="sky">пайплайн потоков склад-склад</Badge>
                <Badge color="sky">более 50 параметров</Badge>
              </Flex>
              <Heading size={"2"} weight={"medium"}>
                Быстрое и надежное решение для 12 и более типовых задач
                логистики
              </Heading>
              <Flex align={"center"} mb="3" gap={"2"} gapY={"1"} wrap={"wrap"}>
                <Timer size={22} />
                <Heading size={"2"} weight={"medium"}>
                  Время расчёта <span className="farfetch">6 минут</span> для
                  120 объектов
                </Heading>
              </Flex>
              <Heading size={"2"} weight={"medium"}>
                Дополнительные сервисы для расчёта и оценки трудоемких и
                нестандартных задач
              </Heading>
            </Flex>
          </Box>
        </Card>
      </Grid>
    </Section>
  );
};
