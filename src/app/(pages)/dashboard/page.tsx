import GetAllOrders from "@/lib/PrismaFunctions/GetAllOrders";
import React from "react";

export default async function page() {
  const orders = await GetAllOrders();

  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <p className="pt-4 pb-8 text-3xl font-bold">All orders</p>
      {orders.map((order) => {
        return (
          <div
            key={order.id}
            className="flex gap-2 px-4 py-2 bg-neutral-900 rounded-md"
          >
            <p>{order.createdAt.toLocaleDateString()}</p>|<p>{order.orderID}</p>
            |<p>{order.name}</p>|<p>{order.email}</p>|<p>{order.address}</p>|
            <p>{order.item}</p>
          </div>
        );
      })}
    </div>
  );
}
