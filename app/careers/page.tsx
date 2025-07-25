"use client"

import Image from "next/image"
import { useEffect } from "react"
import HomeCareersSection from "./components/HomeCareersSection"
import MissionSection from "./components/MissionSection"
import ValuesSection from "./components/ValuesSection"
import TeamsSection from "./components/TeamsSection"
import HiringProcess from "./components/HiringProcess"



export default function CareersPage() {
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes sliding {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-100%)); }
      }
      @keyframes slidingReverse {
        0% { transform: translateX(calc(-100%)); }
        100% { transform: translateX(0); }
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <main className="bg-black text-white font-[Farro]">
      <HomeCareersSection />
      <ValuesSection />
      <MissionSection />
      <TeamsSection />
      <HiringProcess />

     

      
    </main>
  )
}
