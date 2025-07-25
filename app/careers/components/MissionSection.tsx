import Link from "next/link"

export default function MissionSection() {
  return (
    <section className="px-4 pb-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
                    <h2
  className="text-white/60 mb-4 uppercase tracking-widest transition-all duration-700 transform font-sans text-4xl font-light"
>
  Our Mission
</h2>
          <p className="text-white text-lg mb-6 font-['Pontano_Sans']">
            At Tsalla Aerospace, we're not just building aircraft – we're pioneering the future of autonomous flight.
            Our mission is to create intelligent systems that push the boundaries of what's possible in aerospace
            technology.
          </p>
          <p className="text-white text-lg mb-6 font-['Pontano_Sans']">
            Every day, our team works to solve complex challenges in autonomous navigation, AI-driven decision making,
            and cutting-edge aerospace engineering. We believe that the future of flight lies in systems that can think,
            adapt, and perform with unprecedented precision.
          </p>
          <Link
            href="/mission"
            className="inline-flex items-center text-sm text-gray-300 underline underline-offset-4 hover:text-white group"
          >
            <span className=" font-['Chakra_Petch'] relative z-10 text-lg md:text-xl">Learn more about our mission</span>
            <span className="ml-2 w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
              &rarr;
            </span>
          </Link>
        </div>
       
      </div>
    </section>
  )
}
