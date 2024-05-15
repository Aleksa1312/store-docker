import { storeName } from "@/constants/store"
import React from "react"

export default function FooterCopyright() {
  return (
    <p className="absolute bottom-5 left-0 right-0 mx-auto w-fit text-xs text-muted-foreground">
      {`${storeName}© ${new Date().getFullYear()} - All rights reserved.`}
    </p>
  )
}
