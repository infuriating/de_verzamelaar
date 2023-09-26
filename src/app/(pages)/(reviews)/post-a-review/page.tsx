import React from "react";
import prisma from "@/lib/prisma";

import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function page() {
  function postReview(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
  }

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Post a Review</CardTitle>
        <CardDescription>Post a review for a product.</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-2 flex flex-col">
        <form>
          <Label className="text-lg font-semibold">Name</Label>
          <Input className="rounded-[.25rem]" placeholder="Name" />
          <Label className="text-lg font-semibold">Title</Label>
          <Input className="rounded-[.25rem]" placeholder="Title" />
          <Label className="text-lg font-semibold">Body</Label>
          <Input className="rounded-[.25rem]" placeholder="Body" />
          <Label className="text-lg font-semibold">Rating</Label>
          <RadioGroup className="flex px-4 py-2">
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
