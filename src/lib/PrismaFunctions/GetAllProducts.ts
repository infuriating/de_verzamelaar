import prisma from "../prisma";

export default async function GetAllProducts() {
  const products = await prisma.product.findMany();
  return products;
}
