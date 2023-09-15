import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageContainer({ children }: Props) {
  return <div className="w-[96%] ml-[2%]">{children}</div>;
}
