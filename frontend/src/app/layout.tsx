import Overlay from "@/components/layout/Overlay"
import Footer from "@/components/layout/footer/Footer"
import Header from "@/components/layout/header/Header"
import JotaiProvider from "@/providers/jotai/JotaiProvider"
import "@/styles/globals.css"

import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Zen Store | Better Shopping",
  description: "Zen Store is an e-commerce store of the future.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <JotaiProvider>
          <Overlay />
          <Header />
          {children}
          <Footer />
        </JotaiProvider>
      </body>
    </html>
  )
}
