"use client";

import { Box, Section } from "@radix-ui/themes";
import React from "react";
import { Invoice } from "./mobile-views/invoice";
import { Dashboard } from "./mobile-views/dashboard";
import { Contacts } from "@/app/components/contacts/contacts";

interface PresentationProps {
  section: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const MobilePresentation = ({ section }: PresentationProps) => {
  return (
    <Section pt="0" pb="15vh">
      <Box mb="8">
        <Contacts />
      </Box>
      {section === "invoice" && <Invoice />}
      {section === "dashboard" && <Dashboard />}
    </Section>
  );
};
