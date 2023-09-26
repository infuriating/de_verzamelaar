"use client";

import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function GetLocalStorageItem() {
  useEffect(() => {
    const localItem = getLocalItem();
    if (!localItem) redirect("/products");
    else location.replace(`/cart/${localItem}`);
  }, []);

  function getLocalItem() {
    return localStorage.getItem("product");
  }

  return (
    <div className="flex justify-center items-center h-full">
      <p className="text-2xl font-semibold">Retrieving item...</p>
    </div>
  );
}
