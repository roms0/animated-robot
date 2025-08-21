"use client";
import { Contacts } from "@/app/components/contacts/contacts";
import {
  Box,
  Flex,
  Heading,
  Section,
  SegmentedControl,
} from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { InvoiceFeatures } from "./invoice-features";
import { DashboardFeatures } from "./dashboard-features";

interface PresentationProps {
  section: string;
  ref?: React.Ref<HTMLDivElement>;
}

const imgpath = {
  invoice: [
    "fitting-Photoroom",
    "closed-container-Photoroom",
    "coal-Photoroom",
  ],
  dashboard: ["pc-Photoroom"],
};

export const HugePresentation = ({ ref, section }: PresentationProps) => {
  const t = useTranslations();
  const router = useRouter();
  return (
    <Section height={"80vh"} ref={ref} pt="15vh" pb="15vh">
      <Flex justify={"center"}>
        <Flex
          align={"center"}
          position={"absolute"}
          style={{ transform: "translate(60px, -160px)" }}
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
