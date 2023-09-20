import Products from "@/components/Products";
import React from "react";

export default function page() {
  return (
    <>
      <p className="text-center text-2xl font-semibold pb-8">
        Here you can view or order the vintage cameras we have in our
        collection.
      </p>
      <Products />
    </>
  );
}
