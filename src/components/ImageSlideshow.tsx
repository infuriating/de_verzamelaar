import GetAllProducts from "@/lib/PrismaFunctions/GetAllProducts";
import Image from "next/image";
import React from "react";

export default async function ImageSlideshow() {
  const products = await GetAllProducts();
  let currentIndex = 0;

  function setCurrentIndex() {
    currentIndex = Math.floor(Math.random() * products.length);
  }

  setCurrentIndex();

  return (
    <Image
      className="rounded-2xl"
      src={`/products/${products[currentIndex].name
        .toLowerCase()
        .replace(" ", "_")
        .replace(".", "")}.png`}
      alt={products[currentIndex].name || "Product"}
      width={500}
      height={500}
    />
  );
}
