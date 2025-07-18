import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
} from "@radix-ui/themes";
import { ProductFeatured } from "../components/product-featured";
import { NumberUp } from "../components/number-up";
import { getLocale, getTranslations } from "next-intl/server";
import { CopyIcon } from "@radix-ui/react-icons";

export default async function Home() {
  const t = await getTranslations();
  return (
    <Container size={"4"} p="4">
      <Section mt="12vh">
        <Heading mb="6" size={"6"} align={"center"} weight={"bold"}>
          {t("title_hero")}
        </Heading>
        <Flex justify={"center"}>
          <Button variant="ghost" m="auto">
            <CopyIcon />
            info@smartmachines.pro
          </Button>
        </Flex>
      </Section>
      <Section pt="4vh">
        <ProductFeatured />
      </Section>
      <Section>
        <Grid m="auto" maxWidth={"600px"} gap={"9"} columns={"3"} rows={"1"}>
          <Box className="elevated-card">
            + <NumberUp to={12} />% скорость доставки товара в пункт выдачи
          </Box>
          <Box className="elevated-card">
            + <NumberUp to={3} />% к экономии на топливе
          </Box>
          <Box className="elevated-card">
            + <NumberUp to={9} />% к оборачиваемости парка вагонов
          </Box>
        </Grid>
      </Section>
    </Container>
  );
}
