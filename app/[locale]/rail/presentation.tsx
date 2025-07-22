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
  const t = useTranslations();
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
    <Section height={"80vh"} ref={ref} pt="15vh" pb="15vh">
      <Flex justify={"center"}>
        <Flex
          align={"center"}
          position={"absolute"}
          style={{ transform: "translate(60px, -140px)" }}
          gap={"3"}
        >
          {
            //@ts-expect-error
            imgpath[section]?.map((path) => {
              return (
                <Image
                  key={path}
                  alt="huge-cargo"
                  src={`/${path}.png`}
                  width={58}
                  height={58}
                  style={{ marginLeft: "-40px" }}
                />
              );
            })
          }
          <Box className="elevated-card">
            <Heading mb="2" size={"1"} weight={"bold"}>
              {t("title_contact_us")}
            </Heading>
            <Contacts />
          </Box>
        </Flex>
        <SegmentedControl.Root
          onValueChange={(value) => {
            router.push(`?view=${value}&scroll=1`);
          }}
          value={section}
        >
          <SegmentedControl.Item value="invoice">
            {t("invoice")}
          </SegmentedControl.Item>
          <SegmentedControl.Item value="dashboard">
            {t("dashboard")}
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      </Flex>
      {section === "invoice" && <InvoiceFeatures />}
      {section === "dashboard" && <DashboardFeatures />}
    </Section>
  );
};
