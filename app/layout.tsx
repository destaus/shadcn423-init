// import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google"
import {  GeistMono } from 'geist/font/mono';

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

// const fontSans = Geist({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", GeistMono.variable, "font-mono", GeistMono.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
