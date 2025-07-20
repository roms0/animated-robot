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
import { ProductFeatured } from "../components/product-featured";
import { NumberUp } from "../components/number-up";
import { getLocale, getTranslations } from "next-intl/server";
import { CopyIcon, EnterIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations();
  return (
    <Container size={"4"} p="4">
      <Section mt="8vh">
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
        <Flex justify={"between"}>
          <Box m="auto" width={"320px"}>
            <Heading align={"center"} size={"3"} weight={"medium"}>
              {t("up to")}
            </Heading>
            <Heading align={"center"}>
              <span className="farfetch">
                <NumberUp to={12} />%
              </span>
            </Heading>
            <Heading align={"center"} size={"3"} weight={"medium"}>
              {t("metric wait time")}
            </Heading>
            <Box mt="6">
              <Link href={"/auto?view=mile"}>
                <Heading align={"center"} size={"1"} weight={"medium"}>
                  <Box>
                    <EnterIcon />
                  </Box>
                  {t("miles")}
                </Heading>
              </Link>
            </Box>
          </Box>
          <Box m="auto" width={"320px"}>
            <Heading align={"center"} size={"3"} weight={"medium"}>
              {t("up to")}
            </Heading>
            <Heading align={"center"}>
              <span className="farfetch">
                <NumberUp to={3} />%
              </span>
            </Heading>
            <Heading align={"center"} size={"3"} weight={"medium"}>
              {t("metric fuel cost")}
            </Heading>
            <Box mt="6">
              <Link href={"/auto?view=highway"}>
                <Heading align={"center"} size={"1"} weight={"medium"}>
                  <Box>
                    <EnterIcon />
                  </Box>
                  {t("highway")}
                </Heading>
              </Link>
            </Box>
          </Box>
          <Box m="auto" width={"320px"}>
            <Heading align={"center"} size={"3"} weight={"medium"}>
              {t("up to")}
            </Heading>
            <Heading align={"center"}>
              <span className="farfetch">
                <NumberUp to={9} />%
              </span>
            </Heading>
            <Heading align={"center"} size={"3"} weight={"medium"}>
              {t("metric utilization")}
            </Heading>
            <Box mt="6">
              <Link href={"/rail?view=invoice"}>
                <Heading align={"center"} size={"1"} weight={"medium"}>
                  <Box>
                    <EnterIcon />
                  </Box>
                  {t("invoice")}
                </Heading>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Section>
    </Container>
  );
}
