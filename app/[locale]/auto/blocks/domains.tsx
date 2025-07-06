import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

export const Domains = () => {
  return (
    <Flex justify={"center"} gap={"2"} wrap={"wrap"}>
      <Link href="#miles">
        <Card>Первая миля</Card>
      </Link>
      <Link href="#miles">
        <Card>
          <Text style={{ textDecoration: "none" }}>Последняя миля</Text>
        </Card>
      </Link>
      <Link href="#high">
        <Card>Магистраль</Card>
      </Link>
    </Flex>
  );
};
