"use client";

import { useGSAP } from "@gsap/react";
import { Box, Heading } from "@radix-ui/themes";
import gsap from "gsap";
import { useRef } from "react";

interface NumberUpProps {
  to?: number;
}

export const NumberUp = ({ to = 100 }: NumberUpProps) => {
  const num = useRef(null);
  useGSAP(
    () => {
      gsap.from("#target", {
        textContent: 1, // start from 0
        duration: 2.5, // animate in 2 seconds
        snap: { textContent: 1 }, // increment by 1
      });
    },
    { scope: num }
  );
  return (
    <span ref={num}>
      <span id="target">{to}</span>
    </span>
  );
};
