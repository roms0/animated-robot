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

const imgpath = {
  invoice: "fitting-Photoroom",
  dashboard: "pc-Photoroom",
};

export const Presentation = () => {
  const params = useSearchParams();
  const router = useRouter();
  const ref = useRef(null);
  const [section, setsection] = useState("");
  const t = useTranslations();
  useEffect(() => {
    const param = params.get("view");
    if (param) {
      setsection(param);
    } else {
      router.push(`?view=invoice`, { scroll: false });
    }
  }, [params]);
  useEffect(() => {
    if (section && ref.current) {
      (ref.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);
  return (
    <Section height={"80vh"} ref={ref} pt="15vh" pb="15vh">
      <Flex justify={"center"}>
        <Flex
          align={"center"}
          position={"absolute"}
          style={{ transform: "translate(60px, -90px)" }}
          gap={"3"}
        >
          <Image
            alt="huge-cargo"
            //@ts-expect-error
            src={`/${imgpath[section]}.png`}
            width={58}
            height={58}
          />
          <Box className="elevated-card">
            <Heading mb="2" size={"1"} weight={"bold"}>
              {t("title_contact_us")}
            </Heading>
            <Button variant="ghost">
              <CopyIcon /> info@smartmachines.pro
            </Button>
          </Box>
        </Flex>
        <SegmentedControl.Root
          onValueChange={(value) => {
            router.push(`?view=${value}`, { scroll: false });
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
