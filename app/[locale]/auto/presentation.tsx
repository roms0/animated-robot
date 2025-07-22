"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { MobilePresentation } from "./mobile-presentation";
import { HugePresentation } from "./huge-presentation";
import { Box } from "@radix-ui/themes";

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
