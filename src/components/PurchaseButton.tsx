"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  name: string;
}

export default function PurchaseButton({ name }: Props) {
  function storeItemLocally() {
    localStorage.setItem("product", name);
  }

  return (
    <Link href={`/cart/${name}`} onClick={storeItemLocally}>
      <Button className="rounded-[.5rem]" variant={"outline"}>
        Purchase
      </Button>
    </Link>
  );
}
