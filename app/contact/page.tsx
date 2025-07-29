"use client"

import { useState } from "react"
import type { Metadata } from "next"
import PageWrapper from "@/components/PageWrapper"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact - Tsalla Aerospace",
  description: "Get in touch with Tsalla Aerospace for partnerships, inquiries, and more.",
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [errorFields, setErrorFields] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const missing: string[] = []

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        const formatted = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())
        missing.push(formatted)
      }
    })

    if (missing.length > 0) {
      setErrorFields(missing)
      setSubmitted(false)
      return
    }

    setErrorFields([])
    setSubmitted(true)

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      enquiryType: "",
      message: "",
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <PageWrapper>
      <div className="bg-black text-white section-spacing">
        <div className="responsive-container">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="heading-primary text-gray-200 mb-3 font-clash">Reach Out to Us</h1>
            <p className="text-body text-gray-400 max-w-2xl mx-auto font-clash">
              Got a question, idea, or collaboration in mind? Reach out using the form below — our team will be in touch soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid-responsive-2 items-start">
            <div className="space-y-responsive">
              <div>
                <label htmlFor="fullName" className="block text-xs mb-2 uppercase tracking-wider font-clash">Full Name</label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-[#D8D8D8] text-black border-none rounded-md h-12 font-clash"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs mb-2 uppercase tracking-wider font-clash">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#D8D8D8] text-black border-none rounded-md h-12 font-clash"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs mb-2 uppercase tracking-wider font-clash">Phone Number</label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-[#D8D8D8] text-black border-none rounded-md h-12 font-clash"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiryType" className="block text-xs mb-2 uppercase tracking-wider font-clash">Enquiry Type</label>
                <Input
                  id="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="bg-[#D8D8D8] text-black border-none rounded-md h-12 font-clash"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs mb-2 uppercase tracking-wider font-clash">Message</label>
              <Textarea
                id="message"
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className="bg-[#D8D8D8] text-black border-none w-full rounded-md font-clash min-h-[280px] resize-none"
              />
            </div>
          </form>

          <div className="text-center mt-8 md:mt-12 font-semibold font-clash">
            {errorFields.length > 0 && (
              <div className="text-red-500 text-small animate-bounce mb-4">
                Please fill out the following fields: <span className="font-semibold">{errorFields.join(", ")}</span>
              </div>
            )}

            {submitted && (
              <p className="text-green-400 text-small animate-pulse mb-4">✅ Message sent successfully!</p>
            )}

            <Button
              type="submit"
              onClick={handleSubmit}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 bg-[#D8D8D8] text-black font-normal text-base px-10 py-2 hover:bg-gray-400 rounded-md font-clash"
            >
              Send
            </Button>
          </div>

          <div className="grid-responsive-2 mt-16 lg:mt-24 text-small">
            <div className="bg-zinc-900 p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
              <h2 className="block heading-tertiary mb-4 uppercase tracking-wider font-clash font-semibold">Contact Us</h2>
              <p className="mb-2 font-light text-small font-clash">
                <span className="font-normal font-clash">Phone Number</span> - 095357 20540
              </p>
              <p className="font-light text-small font-clash">
                <span className="font-normal font-clash">Email Address</span> - info@tsallaaerospace.com
              </p>
            </div>
            <div className="bg-zinc-900 p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
              <h2 className="block heading-tertiary mb-4 uppercase tracking-wider font-clash font-semibold">Headquarters</h2>
              <p className="font-light text-small font-clash">
                2nd Floor, Indian Institute of Science (Bengaluru), Society for Innovation and Development, Entrepreneurship Centre Rd, IISc, Malleswaram, Bengaluru, Karnataka 560012
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
