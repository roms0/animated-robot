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
import { Contacts } from "../components/contacts/contacts";

export default async function Home() {
  const t = await getTranslations();
  return (
    <Container size={"4"} p="4">
      <Section mt={{ initial: "1", md: "8vh" }}>
        <Heading mb="6" size={"6"} align={"center"} weight={"bold"}>
          {t("title_hero")}
        </Heading>
        <Contacts />
      </Section>
      <Section pt="4vh">
        <ProductFeatured />
      </Section>
      <Section>
        <Flex
          direction={{ initial: "column", md: "row" }}
          gap={{ initial: "9", md: "0" }}
          justify={"between"}
        >
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
            <Box mt="3">
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
            <Box mt="3">
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
            <Box mt="3">
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
