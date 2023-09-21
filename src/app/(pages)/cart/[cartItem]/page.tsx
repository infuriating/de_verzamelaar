import React from "react";
import GetAllProducts from "@/lib/PrismaFunctions/GetAllProducts";
import { Separator } from "@/components/ui/separator";

export default async function page({
  params,
}: {
  params: { cartItem: string };
}) {
  const products = await GetAllProducts();
  let product = products.find(
    (product) => product.name === params.cartItem.replace("%20", " ")
  );

  return (
    <div>
      <p>{product?.name}</p>
      <p>{product?.description}</p>
      <p>€{product?.price}</p>
    </div>
  );
}
