import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import { CopyIcon } from "@radix-ui/react-icons";
import { ProductFeatured } from "../components/product-featured";

export default function Home() {
  return (
    <Container size={"4"} p="4">
      <Section pt="15vh">
        <Heading align={"center"}>⚡ Путь.Про</Heading>
      </Section>
      <Section pt="15vh">
        <Heading size={"2"} align={"center"} weight={"medium"} color="gray">
          Решайте задачи мультимодальной логистики с нашими продуктами
        </Heading>
      </Section>
      <ProductFeatured />
    </Container>
  );
}
