"use client";

import React from "react";

import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PostAReview({ product }: any) {
  const [productLoaded, setProductLoaded] = React.useState(false);

  setTimeout(() => {
    setProductLoaded(true);
  }, 1500);

  async function PostNewReview(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    let name = data.name;
    let product = data.product;
    let title = data.title;
    let body = data.body;
    let rating = data.rating;

    try {
      await fetch("/api/post-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          product,
          title,
          body,
          rating,
        }),
      }).then((res) => res.json());
    } catch {
      console.error("Something went wrong");
    }

    window.location.href = "/";
  }
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Post a Review</CardTitle>
        <CardDescription>
          Post a review for your previously ordered product.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-3 flex flex-col">
        <form onSubmit={PostNewReview}>
          <div className="pb-2">
            <Label className="text-lg font-semibold">Name</Label>
            <Input
              name="name"
              className="rounded-[.25rem]"
              required
              placeholder="Name"
            />
          </div>
          <div className="pb-2">
            <Label className="text-lg font-semibold">Product</Label>

            {productLoaded ? (
              <Input readOnly name="product" value={product} />
            ) : (
              <Input
                disabled
                readOnly
                name="product"
                placeholder="Retrieving product..."
              />
            )}
          </div>

          <div className="pb-2">
            <Label className="text-lg font-semibold">Title</Label>
            <Input
              name="title"
              className="rounded-[.25rem]"
              required
              placeholder="Title"
            />
          </div>
          <div className="pb-2">
            <Label className="text-lg font-semibold">Body</Label>
            <Input
              name="body"
              className="rounded-[.25rem]"
              required
              placeholder="Body"
            />
          </div>
          <Label className="text-lg font-semibold">Rating</Label>
          <RadioGroup required className="flex px-4 py-2 pb-4" name="rating">
            <RadioGroupItem value="1">1</RadioGroupItem>
            <RadioGroupItem value="2">2</RadioGroupItem>
            <RadioGroupItem value="3">3</RadioGroupItem>
            <RadioGroupItem value="4">4</RadioGroupItem>
            <RadioGroupItem value="5">5</RadioGroupItem>
          </RadioGroup>
          <Button
            type="submit"
            className="rounded-[.25rem] w-full font-semibold"
          >
            Post
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
