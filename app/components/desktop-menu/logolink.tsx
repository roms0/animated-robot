"use client";

import { Box } from "@radix-ui/themes";
import Link from "next/link";
import { Logo } from "../product-logo";

export const LogoLink = () => {
  return (
    <Link href={"/"}>
      <Box width={"20px"} height={"20px"}>
        <Logo />
      </Box>
    </Link>
  );
};
