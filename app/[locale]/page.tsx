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
        <Heading align={"center"} size={"7"}>
          ⚡ Путь.Про
        </Heading>
      </Section>
      <Section>
        <Box maxWidth={"400px"} m="auto">
          <Heading size={"4"} align={"center"} weight={"medium"} color="gray">
            Разработка программного обеспечения для комплексной оптимизации
            логистики
          </Heading>
        </Box>
      </Section>
      <ProductFeatured />
    </Container>
  );
}
