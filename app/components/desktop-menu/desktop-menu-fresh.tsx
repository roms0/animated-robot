//@ts-nocheck

import * as React from "react";
import { NavigationMenu, ToggleGroup } from "radix-ui";
import classNames from "classnames";
import {
  CaretDownIcon,
  CopyIcon,
  DividerVerticalIcon,
  DownloadIcon,
  ExternalLinkIcon,
  FileIcon,
} from "@radix-ui/react-icons";
import styles from "./desktop-menu.module.css";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  SegmentedControl,
  Separator,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { Automotive } from "./automotive";
import { Railroads } from "./railroads";
import { Autorail } from "./autorail";
import Link from "next/link";
import { Attachments } from "./attachments";

export const DesktopMenu = () => {
  return (
    <NavigationMenu.Root className={styles.Root}>
      <NavigationMenu.List className={styles.MenuList}>
        <NavigationMenu.Item>
          <Flex align={"center"} gap={"4"} mr="6" mt="2" ml="4">
            <Link href={"/"}>
              <Image alt="logo" width={14} height={16} src="/logo.jpg" />
            </Link>
            {/* <Button variant="ghost" size={"2"}>
              <CopyIcon /> info@smartmachines.pro
            </Button> */}
          </Flex>
        </NavigationMenu.Item>

        <Flex align={"center"} ml="6" mr="6">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className={styles.Trigger}>
              <Text>Решения</Text>{" "}
              <CaretDownIcon className={styles.CaretDown} aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={styles.Content}>
              <Autorail />
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className={styles.Trigger}>
              <Text>Материалы</Text>{" "}
              <CaretDownIcon className={styles.CaretDown} aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={styles.Content}>
              <Attachments />
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </Flex>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={styles.Link}
            href="https://demo.smartmachines.pro/"
          >
            <Flex align={"center"} gap={"1"}>
              <Badge color="gray" variant="surface">
                демо
              </Badge>{" "}
              <Text>Последняя миля</Text>
              <ExternalLinkIcon />
            </Flex>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <SegmentedControl.Root ml="6" mt="1" mr="2" defaultValue="rus">
          <SegmentedControl.Item value="rus">
            <Heading size={"4"}>🇷🇺</Heading>
          </SegmentedControl.Item>
          <SegmentedControl.Item value="eng">
            <Heading size={"4"}>🇺🇸</Heading>
          </SegmentedControl.Item>
        </SegmentedControl.Root>

        <NavigationMenu.Indicator className={styles.Indicator}>
          <div className={styles.Arrow} />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className={styles.ViewportPosition}>
        <NavigationMenu.Viewport className={styles.Viewport} />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(styles.ListItemLink, className)}
          {...props}
          ref={forwardedRef}
        >
          <div className={styles.ListItemHeading}>{title}</div>
          <p className={styles.ListItemText}>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
