import prisma from "../prisma";

export default async function GetAllOrders() {
  const orders = await prisma.order.findMany();
  return orders;
}
