
'use client';

import { BaseColumn } from "@/app/blocks/base-column";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { MetricsUp } from "../metrics-up/metrics-up";
import Image from "next/image";

export const UsageDesktop = () => {
    return (
        <Flex gap={'4'} justify={'center'}>
                    <Flex flexBasis={'20%'} direction={'column'}>
                        <Box>
                            <Heading size={'5'}>multi</Heading>
                            <Heading size={'5'}>channel</Heading>
                        </Box>
                    </Flex>
                    <Flex flexBasis={'50%'} justify={'center'} gap={'4'}>
                        <Flex flexBasis={'50%'} gap={'4'}>
                            <Flex direction={'column'} gap={'4'}>
                                <Box>
                                    <Text align={'center'} >API available for tech teams. Pay as you scale</Text>
                                </Box>
                                <Box>
                                    <Button variant='surface' size={'1'} color="gray">to docs</Button>
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex flexBasis={'50%'} gap={'4'}>
                            <Flex direction={'column'} gap={'4'}>
                                <Box>
                                    <Text align={'center'} >Client UI is to be released soon</Text>
                                </Box>
                                <Box>
                                    <Button variant='surface' size={'1'} color="gray">request demo</Button>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
    )
}