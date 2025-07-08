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
          <Heading weight={"bold"}>Зонирование</Heading>
        </Box>
        <Box>
          <Text align={"center"} weight={"regular"} color="gray">
            создание эффективных зон обслуживания склада в зависимости от его
            параметров
          </Text>
        </Box>
      </Flex>
      <Grid mt="8" columns={{ initial: "1", md: "2" }} gap={"4"}>
        <Box className="elevated-card">
          <Heading align={"center"} size={"3"} weight={"medium"}>
            Параметры и ограничения
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
          <Heading align={"center"} size={"3"} weight={"medium"}>
            Результат
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
