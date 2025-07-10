import { Badge, Box, Flex, Heading, Text } from "@radix-ui/themes";
import { TableItem } from "./table-item";

export const ProductTable = () => {
  return (
    <Flex justify={"center"} gap={"4"} wrap={"wrap"}>
      <Box className="dashed-group">
        <Box>
          <Heading size={"1"} color="gray" weight={"regular"}>
            оптимальная складская логистика
          </Heading>
        </Box>
        <Flex direction={"column"} mt="4" gap={"2"} wrap={"wrap"}>
          <TableItem title="топология объектов">
            <Badge radius="large" color="gray">
              первая миля
            </Badge>{" "}
            <Badge radius="large" color="gray">
              последняя миля
            </Badge>{" "}
          </TableItem>
          <TableItem title="зонирование склада">
            <Badge radius="large" color="gray">
              первая миля
            </Badge>{" "}
            <Badge radius="large" color="gray">
              последняя миля
            </Badge>{" "}
          </TableItem>
        </Flex>
      </Box>
      <Box className="dashed-group">
        <Box>
          <Heading size={"1"} color="gray" weight={"regular"}>
            оптимальные маршруты
          </Heading>
        </Box>
        <Box></Box>
        <Flex direction={"column"} mt="4" gap={"2"} wrap={"wrap"}>
          <TableItem title="маршрутизация">
            <Text
              size={"1"}
              weight={"medium"}
              style={{ color: "var(--gray-6)" }}
            >
              первая миля
            </Text>
            <Badge radius="large" color="gray">
              последняя миля
            </Badge>{" "}
            <Badge radius="large" color="gray">
              магистраль
            </Badge>{" "}
          </TableItem>
          <TableItem title="дозаявка">
            <Badge radius="large" color="gray">
              первая миля
            </Badge>{" "}
            <Badge radius="large" color="gray">
              последняя миля
            </Badge>{" "}
            <Badge radius="large" color="gray">
              магистраль
            </Badge>{" "}
          </TableItem>
        </Flex>
      </Box>

      <Box className="dashed-group">
        <Box>
          <Heading size={"1"} color="gray" weight={"regular"}>
            дополнительная детализация маршрута
          </Heading>
        </Box>
        <Flex direction={"column"} mt="4" gap={"2"} wrap={"wrap"}>
          <TableItem title="нормативная скорость">
            <Badge radius="large" color="gray">
              магистраль
            </Badge>{" "}
          </TableItem>
          <TableItem title="топливо">
            <Badge radius="large" color="gray">
              магистраль
            </Badge>{" "}
          </TableItem>
        </Flex>
      </Box>
    </Flex>
  );
};
