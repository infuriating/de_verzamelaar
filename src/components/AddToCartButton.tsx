"use client";

import React from "react";
import { Button } from "./ui/button";
import ShoppingCart from "@/lib/ShoppingCart";

interface Props {
  itemId: number;
  name: string;
  price: number;
}

export default function AddToCartButton({ itemId, name, price }: Props) {
  return (
    <Button
      className="rounded-[.5rem]"
      variant={"outline"}
      onClick={() =>
        ShoppingCart.addToCart([], {
          itemId: { itemId },
          name: { name },
          price: { price },
        })
      }
    >
      Add to cart
    </Button>
  );
}
