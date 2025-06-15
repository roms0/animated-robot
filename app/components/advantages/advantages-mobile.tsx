
'use client';

import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { MetricsUp } from "../metrics-up/metrics-up";
import { motion } from "motion/react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";


export const AdvantagesMobile = () => {
    return (
        <Flex direction={'column'} gap={'6'}>
            <Flex direction={'column'} gap={'2'}>
            <Heading align={'center'} size={'3'}>multimodal products</Heading>
            <Text size={'1'} align={'center'}>that gains results</Text>
            </Flex>
            <Flex  align={'center'}>
                <Box asChild flexBasis={'46px'} flexShrink={'0'} 
                >
                    <motion.div
                    initial={{ transform: "translateX(-100px)" }}
                    animate={{ transform: "translateX(0px)" }}
                    transition={{ type: "tween", delay: 0.5 }}
                    >
                    <Heading weight={'medium'} size={'4'} color="violet"><MetricsUp value={11}/>%</Heading>
                    </motion.div>
                </Box>
                <Box asChild flexGrow={'1'}>
                    <motion.div
                    initial={{ transform: "translateX(300px)", opacity: 0 }}
                    animate={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{ type: "tween", delay: 0.5 }}
                    >
                    <Text>to revenue cutting transportation costs for autumobile logistics <Button variant='surface' size={'1'} color="cyan">see products <ExternalLinkIcon /></Button></Text>
                    </motion.div>
                </Box>
            </Flex>
            <Flex align={'center'}>
              <Box asChild flexBasis={'46px'} flexShrink={'0'} 
                >
                    <motion.div
                    initial={{ transform: "translateX(-100px)" }}
                    animate={{ transform: "translateX(0px)" }}
                    transition={{ type: "tween", delay: 0.6 }}
                    >
                    <Heading size={'4'} weight={'medium'} color="violet"><MetricsUp value={8}/>%</Heading>
                    </motion.div>
                </Box>
                <Box asChild flexGrow={'1'}>
                    <motion.div
                    initial={{ transform: "translateX(300px)", opacity: 0 }}
                    animate={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{ type: "tween", delay: 0.6 }}
                    >
                    <Text>to utilization rate of cargo cars for railroad operators <Button variant='surface' size={'1'} color="blue">see products <ExternalLinkIcon /></Button></Text>
                    </motion.div>
                </Box>
            </Flex>
        </Flex>
    )
}