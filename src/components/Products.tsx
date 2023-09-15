import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Products() {
  return (
    <Card className="max-w-sm rounded-[.5rem]">
      <CardHeader className="pb-3">
        <CardTitle>yeah kk ding</CardTitle>
        <CardDescription>KAANKERRRRR</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="py-3">
        <Image
          className="object-cover rounded-[.25rem]"
          src="/images/product1.png"
          width={300}
          height={250}
          alt="hey"
        />
      </CardContent>
      <Separator />
      <CardContent className="py-3">€2,95</CardContent>
    </Card>
  );
}
