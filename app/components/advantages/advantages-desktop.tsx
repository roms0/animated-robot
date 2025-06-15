
'use client';

import { BaseColumn } from "@/app/blocks/base-column";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { MetricsUp } from "../metrics-up/metrics-up";

export const AdvantagesDesktop = () => {
    return (
        <BaseColumn>
          <Text weight={'medium'}>Our solutions targeted at success</Text>
          <Flex mt="4" justify={'center'} gap={'6'}>
            <Box>
              <Heading weight={'medium'} align={'center'} ><MetricsUp value={11}/>%</Heading>
              <Text align={'center'} >Transportaion costs reduce for auto logistics</Text>
            </Box>
            <Box>
              <Heading weight={'medium'} align={'center'} ><MetricsUp value={8}/>%</Heading>
              <Text align={'center'} >Cars utilization rate for railroad operators</Text>
            </Box>
          </Flex>
        </BaseColumn>
    )
}