'use client';

import * as React from "react";
import { DesktopMenu } from "./desktop-menu";
import { Container } from "@radix-ui/themes";
import { MobileMenu } from "./mobile-menu";

export const Navigation = () => {
	return (
		<>
			<Container display={{initial: 'none', md: 'initial'}} size={'3'} pl={'5'} pr={'5'}>
				<DesktopMenu />
			</Container>
			<Container display={{initial: 'initial', md: 'none'}} size={'3'}>
				{/* <MobileMenu /> */}
			</Container>
		</>
	);
};

