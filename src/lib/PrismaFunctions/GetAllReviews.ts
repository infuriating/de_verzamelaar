import prisma from "../prisma";

export default async function GetAllReviews() {
  const reviews = await prisma.review.findMany();
  return reviews;
}
