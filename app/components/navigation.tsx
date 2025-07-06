"use client";

import * as React from "react";
import { DesktopMenu } from "./desktop-menu";
import { Container } from "@radix-ui/themes";
import { MobileMenu } from "./mobile-menu";

export const DesktopNavigation = () => {
  return (
    <>
      <Container display={{ initial: "none", md: "initial" }}>
        <DesktopMenu />
      </Container>
    </>
  );
};

export const MobileNavigation = () => {
  return (
    <>
      <Container
        style={{
          position: "sticky",
          bottom: "0px",
          backgroundColor: "var(--color-panel-solid)",
        }}
        display={{ initial: "initial", md: "none" }}
        p="5"
      >
        <MobileMenu />
      </Container>
    </>
  );
};
