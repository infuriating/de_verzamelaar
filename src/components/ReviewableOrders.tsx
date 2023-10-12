"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function ReviewableOrders() {
  const [previousOrders, setPreviousOrders] = useState([]);
  useEffect(() => {
    const previousOrders = getOrders();
    setPreviousOrders(previousOrders);
  }, []);

  function getOrders() {
    return JSON.parse(localStorage.getItem("previousOrders") || "[]");
  }

  return (
    <>
      {previousOrders.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2 pb-4">
          {previousOrders.map((order: any) => (
            <Card key={order.id} className="max-w-md">
              <CardHeader className="text-2xl font-semibold">
                {order.name}{" "}
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>{order.description}</p>
                </CardDescription>
              </CardContent>
              <Separator />
              <CardFooter className="pt-4 grid">
                <p>
                  Price:{" "}
                  <span className="font-medium">
                    €{order.price.toFixed(2) / 100}
                  </span>
                </p>
                <Link href={`/reviews/${order.name}`}>
                  <p className="text-blue-500 hover:underline">
                    Review this product
                  </p>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-2xl font-semibold">You have no orders to review!</p>
      )}
    </>
  );
}
