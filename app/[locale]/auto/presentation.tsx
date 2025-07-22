"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Section,
  SegmentedControl,
  Text,
} from "@radix-ui/themes";
import { MileFeatures } from "./mile-features";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { StoreFeatures } from "./store-features";
import { HighwayFeatures } from "./highway-features";
import Image from "next/image";
import { CopyIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import { Contacts } from "@/app/components/contacts/contacts";

const imgpath = {
  store: "store-Photoroom",
  mile: "small-cargo-Photoroom",
  highway: "huge-cargo-Photoroom",
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
      router.push(`?view=mile`);
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
