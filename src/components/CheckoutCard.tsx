"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CheckoutCard({ product }: any) {
  function handleCheckout(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(formData);

    // fetch("/api/checkout", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     product,
    //     data,
    //   }),
    // }).then((res) => res.json());
  }

  return (
    <form onSubmit={handleCheckout}>
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
                <Input id="name" placeholder="First Last" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Street</Label>
                <Input id="address" placeholder="Address" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">House Number</Label>
                <Input id="address" placeholder="House Number" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">City</Label>
                <Input id="address" placeholder="City" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Postal Code</Label>
                <Input id="address" placeholder="Postal Code" required />
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
            <Button type="submit" className="w-full">
              Pay €{product?.price.toFixed(2) / 100}
            </Button>
          </CardFooter>
        </Card>
      </Card>
    </form>
  );
}
