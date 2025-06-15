
'use client';

import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { MetricsUp } from "../metrics-up/metrics-up";
import { motion } from "motion/react";


export const AdvantagesMobile = () => {
    return (
        <Flex direction={'column'} gap={'6'}>
            <Flex gap={'4'} align={'center'}>
                <Box asChild flexBasis={'60px'} flexGrow={'0'}
                >
                    <motion.div
                    initial={{ transform: "translateX(-100px)" }}
                    animate={{ transform: "translateX(0px)" }}
                    transition={{ type: "tween", delay: 0.5 }}
                    >
                    <Heading weight={'medium'}><MetricsUp value={11}/>%</Heading>
                    </motion.div>
                </Box>
              <Text>Transportaion costs reduce for auto logistics</Text>
            </Flex>
            <Flex gap={'4'} align={'center'}>
              <Box asChild flexBasis={'60px'} flexGrow={'0'}
                >
                    <motion.div
                    initial={{ transform: "translateX(-100px)" }}
                    animate={{ transform: "translateX(0px)" }}
                    transition={{ type: "tween", delay: 0.6 }}
                    >
                    <Heading weight={'medium'}><MetricsUp value={8}/>%</Heading>
                    </motion.div>
                </Box>
              <Text>Cars utilization rate for railroad operators</Text>
            </Flex>
        </Flex>
    )
}