'use client';

import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { MetricsUp } from "../metrics-up/metrics-up";
import { motion } from "motion/react";
import { CodeIcon, FrameIcon, GearIcon } from "@radix-ui/react-icons";


export const UsageMobile = () => {
    return (
        <Flex direction={'column'} gap={'6'}>
            <Flex direction={'column'} gap={'2'}>
            <Heading align={'center'} size={'3'}>Multichannel</Heading>
            <Text size={'1'} align={'center'}>Browse API docs or use UI</Text>
            </Flex>
            <Flex  align={'center'}>
                <Box asChild flexBasis={'46px'} flexShrink={'0'} 
                >
                    <motion.div
                    initial={{ transform: "translateX(-100px)" }}
                    animate={{ transform: "translateX(0px)" }}
                    transition={{ type: "tween", delay: 0.5 }}
                    >
                    <GearIcon style={{ width: '20px', height: '20px'}} />
                    </motion.div>
                </Box>
                <Box asChild flexGrow={'1'}>
                    <motion.div
                    initial={{ transform: "translateX(300px)", opacity: 0 }}
                    animate={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{ type: "tween", delay: 0.5 }}
                    >
                    <Text>API available for tech teams. Pay as you scale <Button variant='surface' size={'1'} color="gray">browse Docs</Button></Text>
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
                    <FrameIcon style={{ width: '20px', height: '20px'}} />
                    </motion.div>
                </Box>
                <Box asChild flexGrow={'1'}>
                    <motion.div
                    initial={{ transform: "translateX(300px)", opacity: 0 }}
                    animate={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{ type: "tween", delay: 0.6 }}
                    >
                    <Text>Client UI is to be released soon <Button variant='surface' size={'1'} color="gray">request a demo</Button></Text>
                    </motion.div>
                </Box>
            </Flex>
        </Flex>
    )
}