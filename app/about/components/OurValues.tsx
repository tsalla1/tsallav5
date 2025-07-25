"use client"

import { useEffect, useRef, useState } from "react"

import { Shield, Users, Target, Heart, Lightbulb, Award, Globe } from "lucide-react"

export default function OurValues() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We push the boundaries of what's possible, constantly exploring new technologies and methodologies to stay ahead of the curve.",
      principles: ["Continuous Learning", "Creative Problem Solving", "Future-Focused Thinking"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Uncompromising Quality",
      description:
        "Every system we build meets the highest standards of reliability and performance, because failure is not an option in critical missions.",
      principles: ["Rigorous Testing", "Quality Assurance", "Performance Excellence"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Collaborative Excellence",
      description:
        "We believe the best solutions come from diverse teams working together, combining different perspectives and expertise.",
      principles: ["Team Collaboration", "Knowledge Sharing", "Inclusive Environment"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Target,
      title: "Mission-Critical Focus",
      description:
        "We understand that our technology serves critical purposes, and we approach every project with the seriousness it deserves.",
      principles: ["Purpose-Driven", "Results-Oriented", "Accountability"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Ethical Responsibility",
      description:
        "We develop technology that serves humanity's best interests, always considering the ethical implications of our innovations.",
      principles: ["Ethical AI", "Responsible Innovation", "Social Impact"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Our vision extends beyond borders, creating solutions that benefit organizations and communities worldwide.",
      principles: ["Global Perspective", "Cultural Awareness", "Sustainable Solutions"],
      color: "from-emerald-500 to-blue-500",
    },
  ]

  const culturalStats = [
    { label: "Employee Satisfaction", value: "96%", description: "Based on annual survey" },
    { label: "Innovation Projects", value: "50+", description: "Active R&D initiatives" },
    { label: "Diversity Index", value: "85%", description: "Diverse workforce representation" },
    { label: "Retention Rate", value: "94%", description: "Annual employee retention" },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
         
        </div>

        {/* Core Values Grid */}
       

        {/* Culture Statistics */}
        <div
          className={`mb-20 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Culture by Numbers</h3>

   <section className="text-white body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      {culturalStats.map((stat) => (
        <div key={stat.label} className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
            {stat.value}
          </h2>
          <p className="leading-relaxed text-gray-300">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Values in Action */}
        <div
          className={`transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 p-12 rounded-2xl text-center">
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Values in Action</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Our values aren't just words on a wall—they're lived every day through our actions, decisions, and the
              technology we create. From ethical AI development to sustainable business practices, we ensure our values
              guide everything we do.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-white font-bold mb-2">Ethical AI Development</h4>
                <p className="text-blue-100 text-sm">
                  Every AI system we create undergoes rigorous ethical review to ensure responsible deployment.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-white font-bold mb-2">Sustainable Innovation</h4>
                <p className="text-blue-100 text-sm">
                  We prioritize environmentally conscious design and sustainable manufacturing processes.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-white font-bold mb-2">Community Impact</h4>
                <p className="text-blue-100 text-sm">
                  We actively contribute to STEM education and support local communities where we operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
