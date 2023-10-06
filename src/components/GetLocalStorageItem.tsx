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
    <div className="flex justify-center items-center h-minusheader">
      <p className="text-4xl font-semibold">Retrieving item...</p>
    </div>
  );
}
