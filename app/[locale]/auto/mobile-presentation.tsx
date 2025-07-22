"use client";

import { Section } from "@radix-ui/themes";
import React from "react";
import { Mile } from "./mobile-views/mile";
import { Highway } from "./mobile-views/highway";
import { Store } from "./mobile-views/store";

interface PresentationProps {
  section: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const MobilePresentation = ({ section }: PresentationProps) => {
  return (
    <Section pt="15vh" pb="15vh">
      {section === "mile" && <Mile />}
      {section === "highway" && <Highway />}
      {section === "store" && <Store />}
    </Section>
  );
};
