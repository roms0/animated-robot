import { ProductHeading } from "./blocks/product-heading";
import { ProductFeatured } from "./blocks/collab/product-featured";
import "./page.css";
import { ProductTable } from "./blocks/product-table/product-table";
import { ProductParams } from "./blocks/product-params";

export default function Home() {
  return (
    <>
      <ProductHeading />
      <ProductTable />
      <ProductFeatured />
      <ProductParams />
    </>
  );
}
