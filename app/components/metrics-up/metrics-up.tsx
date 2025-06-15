'use client'

import { Heading, Text } from "@radix-ui/themes";
import { animate, useInView, useMotionValue, useSpring, useTransform } from "motion/react"
import React, { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";

interface MetricsProps {
    value: number
    duration?: number
}

export const MetricsUp = ({ value, duration = 2}: MetricsProps) => {
    const ref: RefObject<HTMLElement | null> = useRef(null);
    const motionValue = useMotionValue(1);
    const springValue = useSpring(motionValue, {
        mass: 1, stiffness: 100, damping: 10 
    });


    useLayoutEffect(() => {
        if (ref.current) {
            ref.current.textContent = String(1);
        }
    }, []);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        motionValue.set(value);
      }, 1000);


      return () => {
        clearTimeout(timeoutId);
      };
    }, [motionValue, duration]);

    useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const options = {
          useGrouping: false,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        };

        const formattedNumber = Intl.NumberFormat("en-US", options).format(
          latest
        );

        ref.current.textContent = formattedNumber
      }
    });

    return () => unsubscribe();
  }, [springValue]);


  return <span ref={ref}  />;
}