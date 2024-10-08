"use client"

import { type LineItem } from "@medusajs/medusa"
import React from "react"
import ProductThumbnail from "../product/ProductThumbnail"
import useCurrencyCode from "@/hooks/countries/useCurrencyCode"
import { formatAmount } from "@/utils/prices"

export default function OrderItems({ items }: { items: LineItem[] }) {
  const { currencyCode } = useCurrencyCode()

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-medium">Order items</h2>
      <div className="w-full">
        {items.map((item) => (
          <div className="flex flex-row gap-3" key={item.id}>
            <ProductThumbnail
              className="bg-secondary size-20 rounded-[var(--radius)] border object-scale-down p-2"
              src={item.thumbnail}
              width={300}
              height={300}
            />
            <div className="flex w-full flex-row justify-between space-x-3">
              <div className="flex flex-col">
                <h3 className="font-medium">{item.title}</h3>
                <span className="text-muted-foreground text-sm">
                  {item.variant.title}
                </span>
              </div>
              <div className="flex flex-col text-end">
                <span className="text-muted-foreground text-sm">{`${item.quantity}x ${formatAmount(item.unit_price, currencyCode)}`}</span>
                <span className="font-medium">
                  {formatAmount(item.total, currencyCode)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
