"use client";

import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SegmentedControl,
  Text,
} from "@radix-ui/themes";
import { NavigationMenu } from "radix-ui";
import styles from "./mobile-menu.module.css";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import {
  CaretDownIcon,
  DropdownMenuIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";

interface ListItemProps {
  className?: string;
  children?: React.ReactElement | React.ReactNode;
  title: string;
  href: string;
}

const ListItem = React.forwardRef(
  (
    { className, children, title, ...props }: ListItemProps,
    forwardedRef: React.Ref<HTMLAnchorElement>
  ) => (
    <Box className={styles.ItemList}>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(styles.ListItemLink, className)}
          {...props}
          ref={forwardedRef}
        >
          <Heading size={"3"} className={styles.ListItemHeading}>
            {title}
          </Heading>
          {children}
        </a>
      </NavigationMenu.Link>
    </Box>
  )
);

export const MobileMenu = () => {
  return (
    <Flex align={"center"} overflow={"hidden"} gap={"4"}>
      {/* <SegmentedControl.Root>
        <SegmentedControl.Item value="1">
          <Text>Последняя миля</Text>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="2">
          <Text>Магистраль</Text>
        </SegmentedControl.Item>
        <SegmentedControl.Item value="3">
          <Text>Склад</Text>
        </SegmentedControl.Item>
      </SegmentedControl.Root> */}
      <HamburgerMenuIcon width={28} height={28} />
    </Flex>
  );
};
