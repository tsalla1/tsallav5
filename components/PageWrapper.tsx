import type React from "react"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  hasHero?: boolean
}

export default function PageWrapper({ children, className = "", hasHero = false }: PageWrapperProps) {
  return <div className={`min-h-screen bg-black text-white ${hasHero ? "" : "pt-20"} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}
