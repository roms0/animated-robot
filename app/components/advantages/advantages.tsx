'use client';

import { Box } from "@radix-ui/themes";
import * as React from "react";
import { AdvantagesDesktop } from "./advantages-desktop";
import { AdvantagesMobile } from "./advantages-mobile";

export const Advantages = () => {
	return (
		<>
			<Box display={{initial: 'none', sm: 'block'}}>
				<AdvantagesDesktop />
			</Box>
			<Box display={{initial: 'block', sm: 'none'}}>
				<AdvantagesMobile />
			</Box>
		</>
	);
};