"use client";

import { Text } from "@radix-ui/themes";
import "./card.css";
import { ContainerIcon } from "../../icons/container";

export const ProductCard = () => {
  return (
    <div className="card-small-root">
      <Text size={"1"} weight={"bold"}>
        ПМ
      </Text>
      <ContainerIcon />
    </div>
  );
};
