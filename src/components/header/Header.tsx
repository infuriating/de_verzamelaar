import Link from "next/link";
import NavLogic from "./NavLogic";

export default function Header() {
  return (
    <div className="h-16 bg-card border-b mb-8 flex items-center justify-between">
      <div className="w-[96%] ml-[2%] flex justify-between">
        <Link href={"/"}>
          <p className="font-semibold">blssm.shop</p>
        </Link>
        <div className="flex gap-4">
          <NavLogic />
        </div>
      </div>
    </div>
  );
}
