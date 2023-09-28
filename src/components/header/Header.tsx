"use client";

import Link from "next/link";
import NavLogic from "./NavLogic";

export default function Header() {
  let cardProduct = null;

  function setCardProduct() {
    cardProduct = localStorage.getItem("product");
  }

  setCardProduct();
  return (
    <>
      {cardProduct && (
        <Link href={`/cart/${cardProduct}`}>
          <div className="px-2 py-[.1rem] bg-white text-black rounded-full absolute top-1 right-28 text-[10px]">
            In cart: <span className="font-semibold">{cardProduct}</span>
          </div>
        </Link>
      )}
      <div className="h-16 bg-card border-b mb-8 flex items-center justify-between">
        <div className="w-[96%] ml-[2%] flex justify-between">
          <Link href={"/"}>
            <p className="font-semibold">FNS Cameras</p>
          </Link>
          <div className="flex gap-4">
            <NavLogic />
          </div>
        </div>
      </div>
    </>
  );
}
