import { Box, Button, Flex, Section, Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl";
import './page.css'
import { ShineHeading } from "../components/shine-heading/shine-heading";
import { CopyIcon } from "@radix-ui/react-icons";
import { BaseColumn } from "../blocks/base-column";
import { Advantages } from "../components/advantages/advantages";
import { Usage } from "../components/usage/usage";


export default function Home() {
  const main = useTranslations('main');

  return (
    <>
      {/* WE ARE AND CTA */}
      <Section pt={'15vh'}>
        <BaseColumn>
            <ShineHeading />
            <Box maxWidth={'600px'}>
              <Text>crafted by high class mathematicians, data-scientists and logistitians from</Text>
              <Button mt="9" size={'2'} className="cta" radius={'medium'} color='blue' variant="soft">
                <CopyIcon width={20} height={20} />
                <p>info@smartmachines.pro</p>
              </Button>
            </Box>
              <Text size="1">Click and copy the address. Let's cooperate</Text>
        </BaseColumn>
      </Section>
      {/* WHY US */}
      <Section pt={'20vh'}>
          <Advantages />
      </Section>
      <Section pt={'5vh'}>
          <Usage />
      </Section>
    </>
    
  );
}
