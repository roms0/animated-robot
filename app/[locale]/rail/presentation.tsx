"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Section,
  SegmentedControl,
} from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { InvoiceFeatures } from "./invoice-features";
import { DashboardFeatures } from "./dashboard-features";
import Image from "next/image";
import { CopyIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { Contacts } from "@/app/components/contacts/contacts";
import { MobilePresentation } from "./mobile-presentation";
import { HugePresentation } from "./huge-presentation";

const imgpath = {
  invoice: [
    "fitting-Photoroom",
    "closed-container-Photoroom",
    "coal-Photoroom",
  ],
  dashboard: ["pc-Photoroom"],
};

export const Presentation = () => {
  const params = useSearchParams();
  const router = useRouter();
  const ref = useRef(null);
  const [section, setsection] = useState("");
  const [isscroll, setisscroll] = useState(false);
  useEffect(() => {
    const param = params.get("view");
    const scroll = params.get("scroll");
    if (param) {
      setsection(param);
    } else {
      router.push(`?view=invoice`);
    }
    if (scroll) {
      setisscroll(scroll === "1");
    }
  }, [params]);
  useEffect(() => {
    if (section && isscroll && ref.current) {
      (ref.current as HTMLElement).scrollIntoView();
    }
  }, [section]);
  return (
    <>
      <Box display={{ initial: "block", md: "none" }}>
        <MobilePresentation section={section} />
      </Box>
      <Box display={{ initial: "none", md: "block" }}>
        <HugePresentation ref={ref} section={section} />
      </Box>
    </>
  );
};
