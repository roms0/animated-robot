import { Box, Container, Section } from "@radix-ui/themes";
import React from "react";
import { Head } from "./head";
import { ProductFeatured } from "@/app/components/product-featured";
import { Presentation } from "./presentation";
import { MobilePresentation } from "./mobile-presentation";

export default function Home() {
  return (
    <>
      <Container size={"4"} p="4">
        <Head />
        <Section pt={{ initial: "5vh", md: "18vh" }}>
          <ProductFeatured />
        </Section>
        <Presentation />
      </Container>
    </>
  );
}
