
'use client';

import { BaseColumn } from "@/app/blocks/base-column";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { MetricsUp } from "../metrics-up/metrics-up";

export const AdvantagesDesktop = () => {
    return (
        <BaseColumn>
          <Text weight={'medium'}>Our solutions deliver value to multimodal chains</Text>
          <Flex mt="4" justify={'center'} gap={'6'}>
            <Box>
              <Heading weight={'medium'} align={'center'} ><MetricsUp value={11}/>%</Heading>
              <Text align={'center'} >Transportaion costs reduce for <span>auto logistics</span></Text>
            </Box>
            <Box>
              <Heading weight={'medium'} align={'center'} ><MetricsUp value={8}/>%</Heading>
              <Text align={'center'} >Cars utilization rate for <span>railroad operators</span></Text>
            </Box>
          </Flex>
        </BaseColumn>
    )
}