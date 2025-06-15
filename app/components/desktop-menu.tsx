'use client';

import { Flex, Text } from "@radix-ui/themes";
import * as React from "react";

export const DesktopMenu = () => {
	return (
		<>
			<Flex align={'center'} gap={{ initial: '4', md: '9'}} pt={'4'} overflow={'hidden'} direction={{initial: 'column', md: 'row'}}>
				<Text size={'1'} weight={'bold'}>SMARTMACHINES</Text>
				<Flex align={'center'} gap={'6'} overflow={'hidden'}>
					<Text size={'2'} weight={'medium'}>automobile</Text>
					<Text size={'2'} weight={'medium'}>railroads</Text>
					<Text size={'2'} weight={'medium'}>courier</Text>
				</Flex>
			</Flex>
		</>
	);
};

