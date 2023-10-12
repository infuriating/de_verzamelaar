import { Star, ActiveStar } from "@/components/SVGs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GetAllReviews from "@/lib/PrismaFunctions/GetAllReviews";
import Link from "next/link";
import React from "react";

type ReviewProps = {
  id: number;
  title: string;
  body: string;
  rating: number;
  name: string;
  product: string;
  createdAt: Date;
};

export default async function page() {
  const reviews = await GetAllReviews();

  return (
    <>
      <div className="grid grid-cols-2 gap-2 place-items-center">
        {reviews.map((review: ReviewProps) => (
          <Card
            className="flex flex-col items-center justify-center max-w-lg p-4 rounded-[.25rem]"
            key={review.id}
          >
            <p>
              <span className="text-center text-sm text-neutral-400">
                {review.product}
              </span>{" "}
              -{" "}
              <span className="text-center text-sm text-neutral-400">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </p>
            <h1 className="text-2xl font-semibold">
              {review.title} <span className="text-sm"> by {review.name}</span>
            </h1>
            <p>{review.body}</p>
            <div className="flex py-2 gap-[0.2rem]">
              {Array.from(Array(review.rating).keys()).map((i) => (
                <ActiveStar key={i} />
              ))}
              {Array.from(Array(5 - review.rating).keys()).map((i) => (
                <Star key={i} />
              ))}
            </div>
          </Card>
        ))}
      </div>
      <Link
        href={"/reviewable-orders"}
        className="flex pt-4 w-full justify-center items-center"
      >
        <Button className="rounded-[.25rem] font-semibold">
          Review one of your orders!
        </Button>
      </Link>
    </>
  );
}
