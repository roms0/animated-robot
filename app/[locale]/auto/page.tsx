import { ProductFeatured } from "./blocks/collab/product-featured";
import { Container } from "@radix-ui/themes";
import React from "react";
import { Head } from "./alternative/head";
import { Mile } from "./alternative/mile";
import { High } from "./alternative/high";
import { Store } from "./alternative/store";

export default function Home() {
  return (
    <>
      <Container size={"4"} p="4">
        <Head />
        <ProductFeatured />
        <Mile />
        <High />
        <Store />
      </Container>
    </>
  );
}
