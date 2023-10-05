import React from "react";
import GetAllProducts from "@/lib/PrismaFunctions/GetAllProducts";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import ClearCartButton from "@/components/ClearCartButton";

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
        <Card>
          <CardHeader>
            <CardTitle>{product?.name}</CardTitle>
            <CardDescription>{product?.description}</CardDescription>
            <p className="pt-2 font-semibold text-lg">
              €{product?.price.toFixed(2)}
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
        <Card>
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>
                Fill in your address and payment details to complete your
                purchase.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <RadioGroup defaultValue="card">
                <div>
                  <RadioGroupItem
                    value="card"
                    id="card"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="mb-3 h-6 w-6"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                    Card
                  </Label>
                </div>
              </RadioGroup>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  className="invisible absolute"
                  id="item"
                  value={product?.name}
                />
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="First Last" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Street</Label>
                  <Input id="address" placeholder="Address" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">House Number</Label>
                  <Input id="address" placeholder="House Number" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">City</Label>
                  <Input id="address" placeholder="City" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Postal Code</Label>
                  <Input id="address" placeholder="Postal Code" />
                </div>
              </div>
              <Separator />
              <div className="grid gap-2">
                <Label htmlFor="number">Card number</Label>
                <Input id="number" placeholder="" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="month">Expires</Label>
                  <Select>
                    <SelectTrigger id="month">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">January</SelectItem>
                      <SelectItem value="2">February</SelectItem>
                      <SelectItem value="3">March</SelectItem>
                      <SelectItem value="4">April</SelectItem>
                      <SelectItem value="5">May</SelectItem>
                      <SelectItem value="6">June</SelectItem>
                      <SelectItem value="7">July</SelectItem>
                      <SelectItem value="8">August</SelectItem>
                      <SelectItem value="9">September</SelectItem>
                      <SelectItem value="10">October</SelectItem>
                      <SelectItem value="11">November</SelectItem>
                      <SelectItem value="12">December</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem
                          key={i}
                          value={`${new Date().getFullYear() + i}`}
                        >
                          {new Date().getFullYear() + i}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="CVC" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Pay €{product?.price.toFixed(2)}
              </Button>
            </CardFooter>
          </Card>
        </Card>
      </div>
      <ClearCartButton />
    </>
  );
}
