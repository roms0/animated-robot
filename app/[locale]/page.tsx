import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import { CopyIcon } from "@radix-ui/react-icons";
import { ProductFeatured } from "../components/product-featured";
import { NumberUp } from "../components/number-up";
import Image from "next/image";

export default function Home() {
  return (
    <Container size={"4"} p="4">
      <Section mt="10vh">
        <Box m="auto">
          <Heading size={"7"} align={"center"} weight={"medium"}>
            Комплексная оптимизация логистики
          </Heading>
        </Box>
      </Section>
      <ProductFeatured />
      <Section>
        <Grid m="auto" maxWidth={"600px"} gap={"9"} columns={"2"} rows={"2"}>
          <Box className="elevated-card">
            <NumberUp to={131} />
            <NumberUp to={91} />
          </Box>
          <Box className="elevated-card">
            <NumberUp to={800} />
            <NumberUp to={121} />
          </Box>
        </Grid>
      </Section>
    </Container>
  );
}
