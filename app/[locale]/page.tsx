import { Box, Button, Section, Text } from "@radix-ui/themes"
import { useTranslations } from "next-intl";
import './page.css'
import { ShineHeading } from "../components/shine-heading/shine-heading";
import { CopyIcon } from "@radix-ui/react-icons";
import { BaseColumn } from "../blocks/base-column";
import { Advantages } from "../components/advantages/advantages";


export default function Home() {
  const main = useTranslations('main');

  return (
    <>
      {/* WE ARE AND CTA */}
      <Section mt={{initial: '5vh', lg: '10vh'}}>
        <BaseColumn>
            <ShineHeading />
            <Box maxWidth={'600px'}>
              <Text>crafted by high class mathematicians, data-scientists and logistitians from</Text>
              <Button mt="4" size={'2'} className="cta" radius={'medium'} color='blue' variant="soft">
                <CopyIcon width={20} height={20} />
                <p>info@smartmachines.pro</p>
              </Button>
            </Box>
        </BaseColumn>
      </Section>
      {/* WHY US */}
      <Section mt={{lg: '10vh'}}>
        <Advantages />
      </Section>
    </>
    
  );
}
