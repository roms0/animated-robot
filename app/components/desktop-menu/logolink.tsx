"use client";

import { Box } from "@radix-ui/themes";
import { Logo } from "../product-logo";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

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
