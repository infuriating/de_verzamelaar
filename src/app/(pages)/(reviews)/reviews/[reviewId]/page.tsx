import PostAReview from "@/components/PostAReview";
import GetAllProducts from "@/lib/PrismaFunctions/GetAllProducts";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default async function page({
  params,
}: {
  params: { reviewId: string };
}) {
  const products = await GetAllProducts();
  const product = params.reviewId.replace("%20", " ");

  const isReviewIdValid = products.some((p) => p.name === product);

  if (!isReviewIdValid) {
    return (
      <>
        <div className="h-minusheader flex flex-col justify-center items-center w-full">
          <p className="text-2xl font-semibold">
            This product does not exist or can not be reviewed!
          </p>
          <Link
            href={"/reviewable-orders"}
            className="flex pt-4 w-full justify-center items-center"
          >
            <Button className="rounded-[.25rem] font-semibold">
              Check what orders you can review
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <PostAReview product={product} />
      </div>
    </>
  );
}
