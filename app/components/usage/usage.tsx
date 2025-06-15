'use client';

import { Box } from "@radix-ui/themes";
import * as React from "react";
import { UsageMobile } from "./usage-mobile";
import { UsageDesktop } from "./usage-desktop";

export const Usage = () => {
	return (
		<>
			<Box display={{initial: 'none', sm: 'block'}}>
				<UsageDesktop />
			</Box>
			<Box display={{initial: 'block', sm: 'none'}}>
				<UsageMobile />
			</Box>
		</>
	);
};