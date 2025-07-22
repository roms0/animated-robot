"use client";

import { Section } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Mile } from "./mobile-views/mile";
import { Highway } from "./mobile-views/highway";
import { Store } from "./mobile-views/store";

export const MobilePresentation = () => {
  console.log("MOBILE PRESENTSTION");
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
      console.log("mobile");
      // router.push(`?view=mile`, { scroll: false });
    }
  }, [params]);
  useEffect(() => {
    if (section && ref.current) {
      (ref.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);
  return (
    <Section pt="6">
      {section === "mile" && <Mile />}
      {section === "highway" && <Highway />}
      {section === "store" && <Store />}
    </Section>
  );
};
