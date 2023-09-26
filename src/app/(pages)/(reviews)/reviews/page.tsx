import { Star, ActiveStar } from "@/components/SVGs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GetAllReviews from "@/lib/PrismaFunctions/GetAllReviews";
import Link from "next/link";
import React from "react";

export default async function page() {
  const reviews = await GetAllReviews();

  console.log(reviews);

  return (
    <>
      {reviews.map((review) => (
        <Card
          className="flex flex-col items-center justify-center max-w-lg p-4 rounded-[.25rem]"
          key={review.id}
        >
          <h1 className="text-2xl font-semibold">
            {review.title} <span className="text-xl"> - {review.name}</span>
          </h1>
          <p>{review.body}</p>
          <div className="flex">
            {Array.from(Array(review.rating).keys()).map((i) => (
              <ActiveStar key={i} />
            ))}
            {Array.from(Array(5 - review.rating).keys()).map((i) => (
              <Star key={i} />
            ))}
          </div>
        </Card>
      ))}
      <Link
        href={"/post-a-review"}
        className="flex w-full justify-center items-center"
      >
        <Button className="rounded-[.25rem] font-semibold">
          Post a Review
        </Button>
      </Link>
    </>
  );
}
