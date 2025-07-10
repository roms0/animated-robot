"use client";

import { Badge, Box, Flex, Grid, Text } from "@radix-ui/themes";
import classes from "./mobile-menu.module.css";
import React from "react";
import { usePathname } from "@/i18n/navigation";
import { useMenuStore } from "@/app/components/store/menu";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronUpIcon } from "@radix-ui/react-icons";

const parsing = {
  "": { title: "Путь.Про", path: "/", color: "gray" },
  auto: { title: "авто", path: "/auto#index", color: "plum" },
  rail: { title: "жд", path: "/rail#index", color: "pink" },
} as const;

const emj = "🚛🪨📦🛢️";

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
    router.push(fullPath, { scroll: false });

    setTimeout(() => {
      if (hash) {
        history.replaceState(null, "", `#${hash}`);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 500);
  };

  return (
    <a
      className={classes.link}
      href={`/${locale}${href}`}
      onClick={handleClick}
    >
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
            <HashLink href="/auto#index">авто</HashLink>
            <Flex direction={"column"} mt="4">
              <HashLink href="/auto#mile">миля</HashLink>
              <HashLink href="/auto#high">магистраль</HashLink>
              <HashLink href="/auto#store">склад</HashLink>
            </Flex>
          </Box>
          <Box>
            <HashLink href="/rail#index">жд</HashLink>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
