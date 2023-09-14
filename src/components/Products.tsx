import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Products() {
  return (
    <Card className="max-w-sm">
      <CardHeader className="pb-3">
        <CardTitle>Lucide</CardTitle>
        <CardDescription>
          A simply beautiful icon set made for designers and developers.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="pt-3">blablabla</CardContent>
    </Card>
  );
}
