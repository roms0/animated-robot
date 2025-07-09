"use client";

import { Badge, Box, Flex, Grid, Heading, Reset, Text } from "@radix-ui/themes";
import classes from "./mobile-menu.module.css";
import React, { MouseEventHandler, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { useMenuStore } from "@/app/components/store/menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronUpIcon } from "@radix-ui/react-icons";

const parsing = {
  "": { title: "умные машины", path: "/", color: "gray" },
  auto: { title: "авто", path: "/auto", color: "plum" },
  rail: { title: "жд", path: "/rail", color: "pink" },
} as const;

const BreadCrumbs = ({ chunks }: { chunks: string[] }) => {
  return (
    <>
      {chunks.map((chunk, i) => {
        if (i > 0 && chunk == "") return null;
        return (
          <React.Fragment key={chunk}>
            {i > 0 && <code>{` `}</code>}
            <Badge color={parsing[chunk as keyof typeof parsing].color}>
              {parsing[chunk as keyof typeof parsing].title}
            </Badge>
          </React.Fragment>
        );
      })}
    </>
  );
};

function HashLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const locale = useLocale();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const [path, hash] = href.split("#");
    const fullPath = `/${locale}${path.startsWith("/") ? "" : "/"}${path}`;
    console.log(fullPath);
    // Переход на страницу без скролла
    router.push(fullPath, { scroll: false });

    setTimeout(() => {
      if (hash) {
        history.replaceState(null, "", `#${hash}`);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 500); // подстрой под свой контент
  };

  return (
    <a href={`/${locale}${href}`} onClick={handleClick}>
      {children}
    </a>
  );
}

export const MobileMenu = () => {
  const { isOpen, toggle } = useMenuStore();
  const path = usePathname();
  return (
    <>
      <Box
        className={`${classes.menu} ${isOpen && classes["menu-seen"]}`}
        display={{ initial: "block", md: "none" }}
      >
        <Flex
          onClick={toggle}
          align={"center"}
          gap={"4"}
          justify={"between"}
          p="4"
        >
          <Box>
            <BreadCrumbs chunks={path.split("/")} />
          </Box>
          <Box>
            <Text size={"2"} color="gray">
              меню
            </Text>
          </Box>
          <ChevronUpIcon className={classes.indicator} width={18} height={18} />
        </Flex>
        <Grid columns={"2"} p="4">
          <Box>
            <HashLink href="/auto#index">авто 🚛</HashLink>
            <Flex direction={"column"} mt="4">
              <HashLink href="/auto#high">магистраль</HashLink>
            </Flex>
          </Box>
          <Box>
            <HashLink href="/rail#index">жд 🪨📦🛢️</HashLink>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
