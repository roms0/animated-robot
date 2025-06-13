import { Box, Button, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes"
import { useLocale, useTranslations } from "next-intl";
import './page.css'
import { Responsive } from "@radix-ui/themes/props";
import { Carousel } from "../components/carousel/carousel";
import { ShineHeading } from "../components/shine-heading/shine-heading";
import Image from "next/image";
import { CopyIcon } from "@radix-ui/react-icons";


export default function Home() {
  const main = useTranslations('main');
  const locale = useLocale();
  const mission = main('mission')
  const callout = main('callout')
  const features = ['parameters', 'usage', 'payment'] as const


  const long_languages = locale === 'ru'


  return (
    <Container size={'3'} p={'5'} pt={'0'}>

      {/* MISSION */}
      <Section pt={'1'}>
        <Flex height={'100%'} gap={'2'} wrap={'wrap'} pt={'8'} pb={'8'} direction={{initial: 'column'}}>
          <Box>
            <ShineHeading />
          </Box>
          <Text mt="4" color="gray" weight={'medium'} align={'left'} size={{initial: '2', lg: '4'}}>{mission}</Text>
        </Flex>
      </Section>

      <Section pt={"1"}>
        <Flex direction={{initial: 'column', lg: 'row'}} gap={"9"}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', placeItems: 'center'}}>
          <div style={{gridRowStart: '1', gridRowEnd: '2', gridColumnStart: '1', gridColumnEnd: '2', zIndex: '1', transform: 'translateY(-80px)'}}>
            <Heading size={'2'}>{callout}</Heading>
          </div>
          <div style={{gridRowStart: '1', gridRowEnd: '2', gridColumnStart: '1', gridColumnEnd: '2', zIndex: '-1'}}>
            <Box >
              <Carousel />
            </Box>
          </div>
          <div style={{gridRowStart: '1', gridRowEnd: '2', gridColumnStart: '1', gridColumnEnd: '2', zIndex: '1'}}>
              <Button className="cta" radius={'medium'} variant="surface" size={'4'}>
                <CopyIcon width={20} height={20} />
                <p>info@smartmachines.pro</p>
              </Button>
          </div>
        </div>
        <Grid columns={'1'} gap={'6'}>
          {features.map((key) => (
            <Flex key={key} flexBasis={'180px'} direction={'column'} gap={'3'}>
              <Heading size={'2'} >{main(`features.${key}.title`)}</Heading>
              <Text color="gray" weight={'medium'}>{main(`features.${key}.description`)}</Text>
            </Flex>
          ))}
        </Grid>
        </Flex>
      </Section>

    </Container>

    
  );
}
