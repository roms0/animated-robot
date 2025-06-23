import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Section,
  Text,
} from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import { CopyIcon } from "@radix-ui/react-icons";
import "./page.css";
import { ContainerIcon } from "./icons/container";
import { ProductHeading } from "./product-heading";
import { ProductKeyPointsRobust } from "./product-keypoints-robust";
import { ProductLegend } from "./legend";
import { ProductFeatured } from "./product-featured";

export default function Home() {
  const main = useTranslations("main");

  return (
    <>
      <ProductHeading />
      <ProductLegend />
      <ProductFeatured />
      <ProductKeyPointsRobust />
    </>
  );
}
