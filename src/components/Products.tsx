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
import { Button } from "./ui/button";
import AddToCartButton from "./AddToCartButton";

export default async function Products() {
  const products = await GetAllProducts();

  return (
    <div className="grid grid-cols-4 gap-4 pb-4">
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
            <p>€{product.price}</p>
            <AddToCartButton
              itemId={product.id}
              name={product.name}
              price={product.price}
            />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
