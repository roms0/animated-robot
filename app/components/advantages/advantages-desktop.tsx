
'use client';

import { BaseColumn } from "@/app/blocks/base-column";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { MetricsUp } from "../metrics-up/metrics-up";
import Image from "next/image";
import { Carousel } from "../carousel/carousel";

export const AdvantagesDesktop = () => {
    return (
        <Flex gap={'4'} justify={'center'}>
            <Flex flexBasis={'20%'} direction={'column'}>
                <Box>
                    <Heading size={'5'}>multi</Heading>
                    <Heading size={'5'}>modal</Heading>
                </Box>
            </Flex>
            <Flex flexBasis={'70%'} justify={'center'} gap={'9'}>
                <Flex flexBasis={'50%'} gap={'4'}>
                    <Flex direction={'column'} gap={'4'}>
                        <Box>
                            <Heading weight={'medium'} >+ <MetricsUp value={11}/>%</Heading>
                            <Text align={'center'} >to revenue cutting transportation costs for autumobile logistics</Text>
                        </Box>
                        <Image alt="truck" width={100} style={{ objectFit: 'cover'}} height={50} src={'/smart-truck-trans.png'} />
                        <Box>
                            <Button variant='surface' size={'1'} color="cyan">see products</Button>
                        </Box>
                    </Flex>
                </Flex>
                <Flex flexBasis={'50%'} gap={'4'}>
                    <Flex direction={'column'} gap={'4'}>
                        <Box>
                            <Heading weight={'medium'} >+ <MetricsUp value={8}/>%</Heading>
                            <Text align={'center'} >Cargo cars utilization rate for railroad operators</Text>
                        </Box>
                        <Image alt="truck" width={100} style={{ objectFit: 'cover'}} height={50} src={'/smart-railroad-trans.png'} />
                        <Box>
                            <Button variant='surface' size={'1'} color="blue">see products</Button>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}