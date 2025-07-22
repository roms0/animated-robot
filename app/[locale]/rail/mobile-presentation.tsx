"use client";

import { Section } from "@radix-ui/themes";
import React from "react";
import { Invoice } from "./mobile-views/invoice";
import { Dashboard } from "./mobile-views/dashboard";

interface PresentationProps {
  section: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const MobilePresentation = ({ section }: PresentationProps) => {
  return (
    <Section pt="15vh" pb="15vh">
      {section === "invoice" && <Invoice />}
      {section === "dashboard" && <Dashboard />}
    </Section>
  );
};
