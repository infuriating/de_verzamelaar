import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const req = await request.json();

  const review = await prisma.review.create({
    data: {
      name: req.name,
      product: req.product,
      title: req.title,
      body: req.body,
      rating: parseInt(req.rating),
    },
  });

  return NextResponse.json(review);
}
