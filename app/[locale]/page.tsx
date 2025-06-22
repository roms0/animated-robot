import { Box, Button, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import "./page.css";
import { ShineHeading } from "../components/shine-heading/shine-heading";
import { CopyIcon } from "@radix-ui/react-icons";
import { BaseColumn } from "../blocks/base-column";
import { Advantages } from "../components/advantages/advantages";
import { Usage } from "../components/usage/usage";

export default function Home() {
  const main = useTranslations("main");

  return (
    <>
      {/* WE ARE AND CTA */}
      <Section pt={"15vh"}>
        <BaseColumn>
          <ShineHeading />
          <Box mt="5" maxWidth={"600px"}>
            <Text>
              crafted by high class mathematicians, data-scientists and
              logistitians from
            </Text>
            <Button
              mt="2"
              size={"2"}
              className="cta"
              radius={"medium"}
              variant="outline"
            >
              <p>info@smartmachines.pro</p>
              <CopyIcon width={20} height={20} />
            </Button>
          </Box>
          <Text size="1">Click and copy the address. Let's cooperate</Text>
        </BaseColumn>
      </Section>
      {/* WHY US */}
      <Section pt={"15vh"}>
        <Advantages />
      </Section>
      <Section pt={"4vh"} mb={"10vh"}>
        <Usage />
      </Section>
    </>
  );
}
