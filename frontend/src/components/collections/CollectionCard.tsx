import { getProducts } from "@/services/product"
import { type ProductCollection } from "@medusajs/medusa"
import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shared/ui/card"
import ProductThumbnail from "../product/ProductThumbnail"
import { ArrowRight } from "lucide-react"
import LocalizedClientLink from "../link/LocalizedClientLink"

export default async function CollectionCard({
  collection,
}: {
  collection: ProductCollection
}) {
  const response = await getProducts({
    collection_id: [collection.id],
    limit: 1,
  })
  if (!response?.products.length) return null
  const product = response.products[0]

  return (
    <LocalizedClientLink
      className="group"
      href={`/collections/${collection.handle}`}
    >
      <Card className="size-full">
        <CardHeader>
          <div className="bg-secondary size-full overflow-hidden rounded-[var(--radius)] p-5">
            <ProductThumbnail
              className="aspect-square object-scale-down duration-200 group-hover:scale-105"
              width={400}
              height={400}
              src={product?.thumbnail}
            />
          </div>
        </CardHeader>
        <CardContent className="flex w-full flex-row items-center justify-between">
          <CardTitle>{collection.title}</CardTitle>
          <ArrowRight className="text-muted-foreground group-hover:text-foreground size-6 -rotate-45 duration-200 group-hover:rotate-0" />
        </CardContent>
        <CardFooter>
          <CardDescription>View collection</CardDescription>
        </CardFooter>
      </Card>
    </LocalizedClientLink>
  )
}
