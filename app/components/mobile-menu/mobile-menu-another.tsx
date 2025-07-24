"use client";
import { Box } from "@radix-ui/themes";
import { useMenuStore } from "../store/menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import classes from "./mobile-menu-another.module.css";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const MobileMenu = () => {
  const { isOpen, toggle, section, depth } = useMenuStore();
  //   const pathname = usePathname();
  //   const params = useSearchParams();
  return (
    <Box className={`${classes.menu} ${isOpen && classes["menu-seen"]}`}>
      <Box
        className={`${classes.container} ${
          isOpen && classes["container--open"]
        }`}
      >
        <Box className={classes["contents-presentation"]}>
          <Box
            className={`${classes.contents} ${
              classes[`contents--depth-${depth}`]
            }`}
          >
            <Box className={classes.part}>1 tier</Box>
            <Box className={classes.part}>
              2 tier
              <button>to third</button>
            </Box>
            <Box className={classes.part}>
              3 tier
              <button>to first</button>
            </Box>
          </Box>
        </Box>
      </Box>
      <HamburgerMenuIcon
        className={classes.indicator}
        onClick={toggle}
        width={42}
        height={42}
      />
    </Box>
  );
};
