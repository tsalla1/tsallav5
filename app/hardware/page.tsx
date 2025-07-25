import type { Metadata } from "next"
import type { HardwareItem } from "@/lib/types"
import PageWrapper from "@/components/PageWrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hardware Systems - Tsalla Aerospace",
  description: "Advanced unmanned systems and hardware solutions for defense and aerospace applications.",
}

async function getHardware(): Promise<HardwareItem[]> {
  // In a real app, this would fetch from your API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/hardware`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  })

  if (!res.ok) {
    // Return mock data if API fails
    return [
      {
        id: "1",
        name: "Phantom X1",
        description: "Advanced reconnaissance drone with AI-powered target identification",
        specifications: {
          weight: "2.5 kg",
          dimensions: "45cm x 35cm x 12cm",
          range: "50 km",
          payload: "500g",
        },
        images: ["/hardware/phantom-x1.jpg"],
        category: "drone",
        status: "active",
        createdAt: "2024-01-15T00:00:00Z",
        updatedAt: "2024-01-15T00:00:00Z",
      },
      {
        id: "2",
        name: "Sentinel Pro",
        description: "Long-range surveillance system with thermal imaging capabilities",
        specifications: {
          weight: "4.2 kg",
          dimensions: "60cm x 45cm x 18cm",
          range: "100 km",
          payload: "1.2kg",
        },
        images: ["/hardware/sentinel-pro.jpg"],
        category: "drone",
        status: "active",
        createdAt: "2024-01-10T00:00:00Z",
        updatedAt: "2024-01-10T00:00:00Z",
      },
    ]
  }

  return res.json()
}

export default async function HardwarePage() {
  const hardware = await getHardware()

  return (
    <PageWrapper>
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Hardware Systems</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced unmanned systems engineered for superiority in the field. Every component designed for
              reliability, performance, and tactical advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {hardware.map((item) => (
              <Card
                key={item.id}
                className="card-link bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={item.status === "active" ? "default" : "secondary"}>{item.status}</Badge>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <CardTitle className="text-white">{item.name}</CardTitle>
                  <CardDescription className="text-gray-400">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Weight:</span>
                      <span className="text-white">{item.specifications.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Range:</span>
                      <span className="text-white">{item.specifications.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Payload:</span>
                      <span className="text-white">{item.specifications.payload}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Our Technology?</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link
                href="/roadrunner"
                className="animated-link bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Explore AI Pilot
              </Link>
              <Link
                href="/contact"
                className="animated-link border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition-colors"
              >
                Request Demo
              </Link>
            </div>
            <Link href="/mission" className="text-link text-blue-400 hover:text-white">
              Learn about our Mission Systems →
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
