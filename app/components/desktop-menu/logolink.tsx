"use client";

import { Box } from "@radix-ui/themes";
import Link from "next/link";
import { Logo } from "../product-logo";
import { useLocale } from "next-intl";

export const LogoLink = () => {
  const locale = useLocale();
  return (
    <Link href={"/"} locale={locale}>
      <Box width={"20px"} height={"20px"}>
        <Logo />
      </Box>
    </Link>
  );
};
