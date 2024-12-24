import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shakib Al Hasan - Software Developer",
  description: "Portfolio of Shakib Al Hasan, a passionate software developer specializing in Flutter and mobile development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-gray-950`}>{children}</body>
    </html>
  )
}

