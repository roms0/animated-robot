"use client";

import { Box, Section } from "@radix-ui/themes";
import React from "react";
import { Mile } from "./mobile-views/mile";
import { Highway } from "./mobile-views/highway";
import { Store } from "./mobile-views/store";
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
      {section === "mile" && <Mile />}
      {section === "highway" && <Highway />}
      {section === "store" && <Store />}
    </Section>
  );
};
