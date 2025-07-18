import { Container, Flex, Heading, Section } from "@radix-ui/themes";
import { Head } from "./alternative/head";
import { Invoice } from "./alternative/invoice";
import { Scheme } from "./alternative/scheme";
import { Insights } from "./alternative/insights";
import { FeatureCard } from "@/app/components/feature-card/feature-card";
import { ProductFeatured } from "@/app/components/product-featured";
import { Presentation } from "./presentation";

export default function Railroads() {
  return (
    <>
      <Container size={"4"} p="4">
        <Head />
        <ProductFeatured />
        <Presentation />
      </Container>
    </>
  );
}
