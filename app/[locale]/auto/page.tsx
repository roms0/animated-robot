import { ProductHeading } from "./blocks/product-heading";
import { ProductFeatured } from "./blocks/collab/product-featured";
import "./page.css";
import { ProductTable } from "./blocks/product-table/product-table";
import { ProductParams } from "./blocks/product-params";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  SegmentedControl,
  Text,
} from "@radix-ui/themes";
import { ToggleGroup } from "radix-ui";
import { ProductServiceGroups } from "./blocks/product-service-groups";
import { Domains } from "./blocks/domains";
import { Miles } from "./blocks/miles";
import { High } from "./blocks/high";
import { Zones } from "./blocks/zones";
import React, { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Container size={"4"} p="4">
        <ProductHeading />
        <ProductFeatured />
        <Miles />
        <High />
        <Zones />
      </Container>
    </>
  );
}
