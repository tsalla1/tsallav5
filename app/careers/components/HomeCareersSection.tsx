"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const dummyImages = [
  "https://img.freepik.com/premium-photo/human-resources-people-networking-concept_31965-1706.jpg?ga=GA1.1.1396164666.1751527470&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/free-vector/starting-career-concept-illustration_114360-20563.jpg?ga=GA1.1.1396164666.1751527470&semt=ais_items_boosted&w=740",
  "https://img.freepik.com/free-vector/illustrated-woman-being-intern-company_23-2148726151.jpg?ga=GA1.1.1396164666.1751527470&semt=ais_items_boosted&w=740",
  "https://media.istockphoto.com/id/1347652268/photo/group-of-colleagues-celebrating-success.jpg?b=1&s=612x612&w=0&k=20&c=PxvF9nsc5WYTDlrMFaVxhqLcwSz2vrQB_8xCKxKgelU=",
  "https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?b=1&s=612x612&w=0&k=20&c=aC_AmeSgRqnZsW6Z3xDrPkCncd3pPd_cpe7VNJWa5tU=",
  "https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?b=1&s=612x612&w=0&k=20&c=w-p7co1-4so7fpzJI7H-ZzX-NDK1W41yKvAT_X-Z_qg=",
  "https://media.istockphoto.com/id/1446934118/photo/happy-business-man-listening-to-a-discussion-in-an-office.jpg?b=1&s=612x612&w=0&k=20&c=6CGz0oF0bra0Yiyn0PR2Sy31cA3CidlbsZlYZJx1nxg=",
  "https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?b=1&s=612x612&w=0&k=20&c=8varqjy2VLQHBm658rl2hS7MMakLA5iXd7Qvr7L8bx4=",
  "https://media.istockphoto.com/id/513439341/photo/portrait-of-enthusiastic-business-people-in-circle.jpg?b=1&s=612x612&w=0&k=20&c=ZrUq2Tg0RNk6wXQrSZBgE4eV6G4lYKPX69ZgjgV7RTo=",
];

export default function HomeCareersSection() {
  return (
    <section className="bg-black text-white font-farro">
      {/* Hero Section */}
      <div className="pt-40 pb-12 text-center px-4">
        <h1 className="text-4xl md:text-6xl mb-4 font-bold uppercase tracking-tight">
  Launch Ideas That Really Take Off.
</h1>
<p className="text-gray-400 text-lg mb-1 font-pontano">
  Design, build, and launch the next generation of autonomous flight
</p>
<Link
  href="#open-roles"
  className="
    inline-block bg-transparent border border-white text-white
    hover:bg-white hover:text-black
    px-4 py-2 mt-0 transition-colors duration-200
    font-sans text-sm md:text-base
  "
>
  View Open Roles
</Link>
      </div>
  
      {/* Auto-Scrolling Image Section (Left to Right) - Only one animation section now */}
      
      <div className="overflow-hidden relative w-full pb-8 -mt-4">
        <div
          className="flex gap-2 animate-[sliding_40s_linear_infinite]"
          // UPDATED: Adjusted width calculation for larger boxes (350px width + 8px gap = 358px per item)
          style={{ width: `${dummyImages.length * 358}px` }}
        >
          
          {[...dummyImages, ...dummyImages].map((src, index) => (
            <div
              key={index}
              className="relative w-[350px] h-[350px] flex-shrink-0 rounded-lg overflow-hidden" // UPDATED: Made boxes larger
            >
              <Image
                src={src}
                alt={`Innovation ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    
  
      {/* Minds & Makers Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start px-4 pb-24 max-w-7xl mx-auto pt-3 my-[30px] my-[3px] my-[px] my-44 my-44 my-3.5 my-0">
        <div>
    <h2
  className="text-white/60 mb-4 uppercase tracking-widest transition-all duration-700 transform font-sans text-4xl font-light"
>
  The Minds & Makers
</h2>
  </div>
<div>
  <p className="text-white text-base md:text-lg mb-6 font-['Pontano_Sans']">
    Tsalla Aerospace is where visionaries and veterans converge to
    reimagine what’s possible in flight and defense. We prototype by
    sunrise, refine by midnight, and never settle for ordinary. Shaped
    by lived experience and fearless innovation, our team transforms
    challenges into breakthroughs.
  </p>

  <Link
    href="/team"
    className="inline-flex items-center text-lg text-gray-300 hover:text-white group font-['Chakra_Petch'] transition-colors duration-200 whitespace-nowrap"
  >
    <span className="relative z-10 underline underline-offset-4 whitespace-nowrap">
      Discover the minds and makers turning tomorrow’s ideas into today’s capabilities.
    </span>
    <span className="ml-2 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-300 group-hover:bg-white group-hover:text-black transition-all duration-200">
      &rarr;
    </span>
  </Link>
</div>
      </div>
    </section>
  );
}
