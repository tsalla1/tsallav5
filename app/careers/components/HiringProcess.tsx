import Link from "next/link"

export default function HiringProcess() {
  const openPositions = [
    {
      title: "Senior Aerospace Engineer",
      department: "Engineering",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description: "Lead the design and development of next-generation autonomous flight systems.",
    },
    {
      title: "AI/ML Research Scientist",
      department: "Research & Development",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description: "Develop cutting-edge machine learning algorithms for autonomous navigation and decision-making.",
    },
    {
      title: "Flight Test Engineer",
      department: "Operations",
      location: "Nevada Test Site",
      type: "Full-time",
      description:
        "Conduct comprehensive flight testing and validation of autonomous systems in real-world conditions.",
    },
    {
      title: "Systems Integration Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      description: "Integrate complex hardware and software systems for next-generation autonomous platforms.",
    },
  ]

  const hiringSteps = [
    {
      step: "01",
      title: "Application Review",
      description:
        "We carefully review every application and portfolio to understand your unique background and potential fit.",
    },
    {
      step: "02",
      title: "Initial Interview",
      description: "A conversation with our hiring team to discuss your experience, interests, and career goals.",
    },
    {
      step: "03",
      title: "Technical Assessment",
      description: "Demonstrate your skills through relevant technical challenges or portfolio presentations.",
    },
    {
      step: "04",
      title: "Team Interview",
      description: "Meet with potential teammates and stakeholders to ensure cultural and technical alignment.",
    },
    {
      step: "05",
      title: "Final Decision",
      description: "We make our decision quickly and provide feedback regardless of the outcome.",
    },
  ]

  return (
    <section className="px-4 pb-24 max-w-7xl mx-auto">
      {/* Hiring Process */}
     
      {/* Open Positions */}
      <div id="open-roles" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 uppercase">Open Positions</h2>
          <p className="text-gray-400 text-lg">Join our mission to revolutionize autonomous flight technology.</p>
        </div>

        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{position.description}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Link
                    href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                    className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Don't See the Right Role?</h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future
          opportunities that match your skills and interests.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/careers/apply"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Send Resume
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-colors font-medium"
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
