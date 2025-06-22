"use client";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useAnimation,
  useAnimate,
} from "motion/react";
import "./page.css";
import { Heading, Text } from "@radix-ui/themes";
import { useEffect } from "react";

export function Cinema() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { opacity: 1 }, { duration: 0.5 });
    animate(
      scope.current,
      { opacity: 1, transform: "translateX(100%)" },
      { duration: 6 }
    );
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} ref={scope}>
      <motion.div
        className="car"
        id="car-1"
        initial={{ transform: "translateX(-100px) translateY(-40px)" }}
      />
      <motion.div
        className="car"
        id="car-2"
        initial={{ transform: "translateX(-100px) translateY(50px)" }}
      />
      <motion.div
        className="car"
        id="car-3"
        initial={{ transform: "translateX(230px) translateY(-60px)" }}
      />
      <motion.div
        className="car"
        id="car-4"
        initial={{ transform: "translateX(30px) translateY(30px)" }}
      />
      <motion.div
        className="car"
        id="car-1"
        initial={{ transform: "translateX(-300px) translateY(10px)" }}
      />
      <motion.div
        className="car"
        id="car-2"
        initial={{ transform: "translateX(-120px) translateY(30px)" }}
      />
      <motion.div
        className="car"
        id="car-3"
        initial={{ transform: "translateX(-90px) translateY(0px)" }}
      />
      <motion.div
        className="car"
        id="car-4"
        initial={{ transform: "translateX(90px) translateY(-40px)" }}
      />
    </motion.div>
  );
}
