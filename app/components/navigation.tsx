"use client";

import * as React from "react";
import { DesktopMenu } from "./desktop-menu";
import { Container } from "@radix-ui/themes";

export const DesktopNavigation = () => {
  return (
    <>
      <Container display={{ initial: "none", md: "initial" }}>
        <DesktopMenu />
      </Container>
    </>
  );
};
