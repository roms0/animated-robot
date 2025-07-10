import { Container } from "@radix-ui/themes";
import { Head } from "./alternative/head";
import { ProductFeatured } from "./alternative/product-featured";
import { Invoice } from "./alternative/invoice";
import { Scheme } from "./alternative/scheme";
import { Insights } from "./alternative/insights";

export default function Railroads() {
  return (
    <>
      <Container size={"4"} p="4">
        <Head />
        <ProductFeatured />
        <Invoice />
        <Scheme />
        <Insights />
      </Container>
    </>
  );
}
