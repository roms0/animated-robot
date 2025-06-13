import { Box, Button, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes"
import { useLocale, useTranslations } from "next-intl";
import './page.css'
import { Responsive } from "@radix-ui/themes/props";
import { Carousel } from "../components/carousel/carousel";
import { ShineHeading } from "../components/shine-heading/shine-heading";
import Image from "next/image";
import { CopyIcon } from "@radix-ui/react-icons";
import { BaseGrid } from "../blocks/base-grid";
import { BaseStack, BaseStage } from "../blocks/base-stack";
import { BaseColumn } from "../blocks/base-column";


export default function Home() {
  const main = useTranslations('main');
  const locale = useLocale();
  const mission = main('mission')
  const callout = main('callout')
  const features = ['parameters', 'usage', 'payment'] as const

  return (
    <Container pl="6" pr="6" >
      {/* MISSION */}
      <Section>
        <BaseColumn>
            <ShineHeading />
            <Text  align={'center'}>{mission}</Text>
        </BaseColumn>
      </Section>
      {/* CTA */}
      <Section>
        <BaseColumn>
          <Text size={'1'}>{callout}</Text>
          <BaseStack>
              <BaseStage asChild stage={-1}>
                <Box>
                  <Carousel />
                </Box>
              </BaseStage>
              <BaseStage asChild stage={1}>
                <Box>
                  <Button className="cta" radius={'medium'} variant="surface">
                    <CopyIcon width={20} height={20} />
                    <p>info@smartmachines.pro</p>
                  </Button>
                </Box>
              </BaseStage>
            </BaseStack>
          </BaseColumn>
      </Section>
      {/* FEATURES */}
      <Section>
        <BaseGrid>
          {features.map((key) => (
            <Flex key={key} direction={'column'} gap={'2'}>
              <Text weight={'bold'} >{main(`features.${key}.title`)}</Text>
              <Text>{main(`features.${key}.description`)}</Text>
            </Flex>
          ))}
        </BaseGrid>
      </Section>

    </Container>
    
  );
}
