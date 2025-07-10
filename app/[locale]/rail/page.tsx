import { Container } from "@radix-ui/themes";
import { Head } from "./alternative/head";
import { ProductFeatured } from "./alternative/product-featured";
import { Mile } from "./alternative/mile";
import { High } from "./alternative/high";
import { Store } from "./alternative/store";

export default function Railroads() {
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
