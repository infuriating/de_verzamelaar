"use client";

import React from "react";
import { Button } from "./ui/button";

export default function ClearCartButton() {
  const removeCartItem = () => {
    localStorage.removeItem("product");
    location.href = "/products";
  };

  return (
    <div className="flex justify-center items-center">
      <Button
        variant={"destructive"}
        className="px-16 mb-4 rounded-[.2rem]"
        onClick={() => removeCartItem()}
      >
        Cancel Purchase
      </Button>
    </div>
  );
}
