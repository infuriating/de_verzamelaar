import React from "react";
import GetAllProducts from "@/lib/PrismaFunctions/GetAllProducts";
import { redirect } from "next/navigation";
import ClearCartButton from "@/components/ClearCartButton";
import CheckoutCard from "@/components/CheckoutCard";
import CartItem from "@/components/CartItem";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export async function generateMetadata({
  params,
}: {
  params: { cartItem: string };
}) {
  return {
    title: `FNS Cameras | ${params.cartItem.replace("%20", " ")} - Checkout`,
  };
}

export default async function page({
  params,
}: {
  params: { cartItem: string };
}) {
  const products = await GetAllProducts();
  let product = products.find(
    (product: Product) => product.name === params.cartItem.replace("%20", " ")
  );

  if (!product) {
    redirect("/products");
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 pb-4">
        <CartItem product={product} />
        <CheckoutCard product={product} />
      </div>
      <ClearCartButton />
    </>
  );
}
