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

export const Zones = () => {
  return (
    <Section>
      <Flex align={"center"} direction={"column"} gap={"2"}>
        <Box>
          <Heading size={"2"} weight={"bold"}>
            зонирование
          </Heading>
        </Box>
        <Box>
          <Heading size={"1"} weight={"regular"} color="gray">
            создание эффективных зон обслуживания склада в зависимости от его
            параметров
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
                  до 10 параметров логистического объекта
                </Heading>
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
                  Оптимальная разбивка точек доставки для склада по зонам
                </Heading>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Grid>
    </Section>
  );
};
