import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

let randomCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export async function POST(request: NextRequest) {
  const req = await request.json();

  const order = await prisma.order.create({
    data: {
      orderID: [...Array(20)]
        .map((_) =>
          randomCharacters.charAt(
            Math.floor(Math.random() * randomCharacters.length)
          )
        )
        .join(""),
      name: req.name,
      email: req.email,
      address: req.address,
      item: req.item,
      price: req.price,
    },
  });

  return NextResponse.json(order);
}
