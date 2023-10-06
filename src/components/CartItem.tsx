import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function CartItem({ product }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product?.name}</CardTitle>
        <CardDescription>{product?.description}</CardDescription>
        <p className="pt-2 font-semibold text-lg">
          €{product?.price.toFixed(2) / 100}
        </p>
      </CardHeader>
      <Separator />
      <CardContent className="p-2 flex flex-col">
        <Image
          className="p-4 object-cover aspect-[3/2]"
          src={`/products/${product?.name
            .toLowerCase()
            .replace(" ", "_")
            .replace(".", "")}.png`}
          alt={product?.name || "Product"}
          width={600}
          height={200}
        />
      </CardContent>
      <Separator />
    </Card>
  );
}
