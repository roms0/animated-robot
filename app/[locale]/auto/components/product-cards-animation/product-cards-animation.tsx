"use client";

import { Flex } from "@radix-ui/themes";
import "./product-cards-animation.css";
import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTime,
  useTransform,
} from "motion/react";

interface ProductCardsAnimationProps {
  children: React.ReactNode[];
}

export const ProductCardsAnimation = ({
  children,
}: ProductCardsAnimationProps) => {
  const time = useTime();
  const translateX = useTransform(
    time,
    [0, 4000, 8000], // For every 4 seconds...
    [0, -100, 0] // ...rotate 360deg
  );
  return (
    <Flex
      asChild
      justify={"center"}
      gap={"6"}
      align={"center"}
      p="3"
      width={"fit-content"}
    >
      <motion.div>{children}</motion.div>
    </Flex>
  );
};
