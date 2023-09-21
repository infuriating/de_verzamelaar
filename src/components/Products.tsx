import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import GetAllProducts from "@/lib/PrismaFunctions/GetAllProducts";
import Image from "next/image";
import AddToCartButton from "./PurchaseButton";
import PurchaseButton from "./PurchaseButton";

export default async function Products() {
  const products = await GetAllProducts();

  return (
    <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pb-4">
      {/* @ts-ignore */}
      {products.map((product) => (
        <Card className="max-w-md rounded-[.35rem]" key={product.id}>
          <CardHeader className="pb-3">
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="py-3">
            <Image
              className="object-cover rounded-[.2rem] border h-[250px]"
              src={`/products/${product.name
                .toLowerCase()
                .replace(" ", "_")
                .replace(".", "")}.png`}
              width={400}
              height={250}
              alt="hey"
            />
          </CardContent>
          <Separator />
          <CardFooter className="py-3 flex justify-between">
            <p>€{product.price.toFixed(2)}</p>
            <PurchaseButton name={product.name} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
