import { Container, Section } from "@radix-ui/themes";
import React from "react";
import { Head } from "./alternative/head";
import { ProductFeatured } from "@/app/components/product-featured";
import { Presentation } from "./presentation";

export default function Home() {
  return (
    <>
      <Container size={"4"} p="4">
        <Head />
        <Section pt="18vh">
          <ProductFeatured />
        </Section>
        <Presentation />
      </Container>
    </>
  );
}
