'use client';

import * as React from "react";
import { DesktopMenu } from "./desktop-menu";
import { Container } from "@radix-ui/themes";
import { MobileMenu } from "./mobile-menu";

export const Navigation = () => {
	return (
		<>
			<Container display={{initial: 'none', md: 'initial'}}>
				<DesktopMenu />
			</Container>
			<Container display={{initial: 'initial', md: 'none'}} mt="3">
				<DesktopMenu />
			</Container>
		</>
	);
};

