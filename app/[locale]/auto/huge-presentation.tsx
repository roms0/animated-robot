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
import { MileFeatures } from "./mile-features";
import { HighwayFeatures } from "./highway-features";
import { StoreFeatures } from "./store-features";

interface PresentationProps {
  section: string;
  ref?: React.Ref<HTMLDivElement>;
}

const imgpath = {
  store: "store-Photoroom",
  mile: "small-cargo-Photoroom",
  highway: "huge-cargo-Photoroom",
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
          style={{ transform: "translate(60px, -140px)" }}
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
            <Contacts />
          </Box>
        </Flex>
        <SegmentedControl.Root
          onValueChange={(value) => {
            router.push(`?view=${value}&scroll=1`);
            sessionStorage.setItem("y", window.pageYOffset.toString());
          }}
          value={section}
        >
          <SegmentedControl.Item value="mile">
            {t("miles")}
          </SegmentedControl.Item>
          <SegmentedControl.Item value="highway">
            {t("highway")}
          </SegmentedControl.Item>
          <SegmentedControl.Item value="store">
            {t("store")}
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      </Flex>
      {section === "mile" && <MileFeatures />}
      {section === "highway" && <HighwayFeatures />}
      {section === "store" && <StoreFeatures />}
    </Section>
  );
};
