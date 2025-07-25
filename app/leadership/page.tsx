import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"

export const metadata: Metadata = {
  title: "Leadership - Tsalla Aerospace",
  description: "Meet the visionary leaders driving innovation at Tsalla Aerospace.",
}

export default function LeadershipPage() {
  return (
    <PageWrapper>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Leadership</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and shaping the future of autonomous systems.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
