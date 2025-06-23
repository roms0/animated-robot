import { ProductHeading } from "./blocks/product-heading";
import { ProductKeyPointsRobust } from "./blocks/product-table/product-keypoints-robust";
import { ProductCatch } from "./blocks/product-catch/product-catch";
import { ProductFeatured } from "./blocks/collab/product-featured";
import { ProductUsecase } from "./blocks/product-usecase/product-usecase";

export default function Home() {
  return (
    <>
      <ProductHeading />
      <ProductCatch />
      <ProductFeatured />
      <ProductUsecase />
    </>
  );
}
