
'use client';

import { BaseColumn } from "@/app/blocks/base-column";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { MetricsUp } from "../metrics-up/metrics-up";
import Image from "next/image";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export const UsageDesktop = () => {
    return (
        <Flex gap={'4'} justify={'end'}>
            {/* <Flex flexBasis={'30%'} align={'center'}>
                <Image style={{ borderRadius: 'var(--radius-5)', filter: 'saturate(0.7)'}} alt="collab" width={120} height={120} src="/channels.jpg" />
                <Heading  style={{backgroundColor: 'white', transform: 'translateX(-40px)', borderRadius: '6px', padding: '3px'}} size={'3'} weight={'medium'}>multichannel collaboration</Heading>
            </Flex> */}
            <Flex flexBasis={'70%'} justify={'center'} gap={'9'}>
                <Flex flexBasis={'50%'} gap={'4'}>
                    <Flex direction={'column'} gap={'4'}>
                        <Box>
                            <Heading size={'3'} className="upscale" weight={'medium'}>Scalable pricing</Heading>
                            <Text align={'center'}>Pick services you only need to</Text>
                        </Box>
                        <Box>
                            <Button variant='surface' color="gray" size={'1'}>browse docs <ExternalLinkIcon /></Button>
                        </Box>
                    </Flex>
                </Flex>

                <Flex flexBasis={'50%'} gap={'4'}>
                    <Flex direction={'column'} gap={'4'}>
                        <Box>
                            <Heading size={'3'} className="upscale" weight={'medium'}>Machines UI</Heading>
                            <Text align={'center'}>to use dashboards and manage logistics online</Text>
                        </Box>
                        <Box>
                            <Button variant='surface' size={'1'} color="gray">request demo <ExternalLinkIcon /></Button>

                        </Box>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    )
}