import type React from "react"
import type { Metadata } from "next"
import { Lora } from "next/font/google"
import "./globals.css"

const lora = Lora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dharmik Themes",
  description:
    "Experience the bliss of Krishna consciousness through chanting, dancing, feasting, and spiritual fellowship in our loving community.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  )
}
