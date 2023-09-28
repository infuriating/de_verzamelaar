"use client";

import React, { useState } from "react";

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
import PostNewReview from "@/lib/PrismaFunctions/PostNewReview";

export default function PostAReview() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    body: "",
    rating: 0,
  });

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Post a Review</CardTitle>
        <CardDescription>Post a review for a product.</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-3 flex flex-col">
        <form>
          <div className="pb-2">
            <Label className="text-lg font-semibold">Name</Label>
            <Input
              className="rounded-[.25rem]"
              required
              placeholder="Name"
              value={formData?.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="pb-2">
            <Label className="text-lg font-semibold">Title</Label>
            <Input
              className="rounded-[.25rem]"
              required
              placeholder="Title"
              value={formData?.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div className="pb-2">
            <Label className="text-lg font-semibold">Body</Label>
            <Input
              className="rounded-[.25rem]"
              required
              placeholder="Body"
              value={formData?.body}
              onChange={(e) =>
                setFormData({ ...formData, body: e.target.value })
              }
            />
          </div>
          <Label className="text-lg font-semibold">Rating</Label>
          <RadioGroup className="flex px-4 py-2 pb-4">
            <RadioGroupItem value="1">1</RadioGroupItem>
            <RadioGroupItem value="2">2</RadioGroupItem>
            <RadioGroupItem value="3">3</RadioGroupItem>
            <RadioGroupItem value="4">4</RadioGroupItem>
            <RadioGroupItem value="5">5</RadioGroupItem>
          </RadioGroup>
          <Button
            onClick={() => PostNewReview(formData)}
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
