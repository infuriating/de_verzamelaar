import prisma from "../prisma";

interface Review {
  name: string;
  title: string;
  body: string;
  rating: number;
}

export default async function PostNewReview({
  name,
  title,
  body,
  rating,
}: Review) {
  const newReview = await prisma.review.create({
    data: {
      name: name,
      title: title,
      body: body,
      rating: rating,
    },
  });

  return newReview;
}
