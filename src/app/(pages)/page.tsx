import ImageSlideshow from "@/components/ImageSlideshow";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center h-minusheader flex gap-8 justify-center flex-col md:items-center md:grid md:grid-cols-2">
      <div>
        <p className="text-3xl font-medium">
          Welcome to <span className="font-bold">FNS Cameras</span>
        </p>
        <p className="text-xl">
          Here at FNS Cameras we have an collection of old and new cameras.
          <br />
          Feel free to check out what we have in stock on our products page.
        </p>
        <Link href={"/products"}>
          <Button className="rounded-[.25rem] font-semibold">
            View Products
          </Button>
        </Link>
      </div>
      <div>
        <ImageSlideshow />
      </div>
    </div>
  );
}
