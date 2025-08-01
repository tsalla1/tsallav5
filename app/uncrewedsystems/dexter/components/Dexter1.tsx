// app/mission-profiles/page.tsx
"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const sections = [
  { id: "home", title: "Home", number: "01", content: "Home content here..." },
  { id: "collection", title: "Collection", number: "02", content: "Collection details..." },
  { id: "material", title: "Material", number: "03", content: "Material info..." },
  { id: "production", title: "Production", number: "04", content: "Production summary..." },
  { id: "journal", title: "Journal", number: "05", content: "Journal logs..." },
];

export default function MissionProfiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current as HTMLElement,
      smooth: true,
      direction: "horizontal",
    });

    const blocks = document.querySelectorAll(".block[data-block-section]");

    scroll.on("scroll", () => {
      blocks.forEach((block) => {
        const attr = block.getAttribute("data-block-section");
        const section = document.querySelector(
          `section[data-block-section="${attr}"]`
        ) as HTMLElement;

        if (!section) return;

        const rectLeft = section.getBoundingClientRect().left;
        const blockIndex = Number(attr);

        if (rectLeft <= block.offsetWidth * blockIndex) {
          block.classList.add("fixed");
          block.classList.remove("init", "active");
          block.setAttribute("style", "");
        } else if (
          rectLeft >=
          window.innerWidth - block.offsetWidth * (sections.length - blockIndex)
        ) {
          block.classList.add("init");
          block.classList.remove("active", "fixed");
          block.setAttribute("style", "");
        } else {
          block.classList.add("active");
          block.classList.remove("init", "fixed");
          block.setAttribute("style", `left: ${rectLeft}px`);
        }
      });
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          background: #a19a8f;
          overflow: hidden;
        }
        .section {
          width: 120vw;
          font-size: 4rem;
          background: #a19a8f;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .wrap {
          display: flex;
          height: 100vh;
        }
        .blocks {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 100;
          pointer-events: none;
        }
        .block {
          position: absolute;
          top: 0;
          left: 0;
          width: 4rem;
          height: 100%;
          background: #a19a8f;
          padding: 2rem 1.25rem;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
          pointer-events: auto;
          cursor: pointer;
          border-left: 0.2rem solid #000;
          font-weight: 500;
        }
        .block__title {
          transform: rotate(-90deg);
          text-align: right;
          white-space: nowrap;
        }
        .block__number {
          font-size: 1.5rem;
        }
        .block[data-block-section="2"].init {
          left: calc(100vw - 16rem);
        }
        .block[data-block-section="2"].fixed {
          left: 4rem;
        }
        .block[data-block-section="3"].init {
          left: calc(100vw - 12rem);
        }
        .block[data-block-section="3"].fixed {
          left: 8rem;
        }
        .block[data-block-section="4"].init {
          left: calc(100vw - 8rem);
        }
        .block[data-block-section="4"].fixed {
          left: 12rem;
        }
        .block[data-block-section="5"].init {
          left: calc(100vw - 4rem);
        }
        .block[data-block-section="5"].fixed {
          left: 16rem;
        }
      `}</style>

      {/* Sidebar Blocks */}
      <div className="blocks">
        {sections.map((section, i) => (
          <div
            key={section.id}
            className="block init"
            data-block-section={i + 1}
            data-href={section.id}
          >
            <div className="block__title">{section.title}</div>
            <div className="block__number">{section.number}</div>
          </div>
        ))}
      </div>

      {/* Scroll Container */}
      <main ref={containerRef} data-scroll-container>
        <div className="wrap" data-scroll-section>
          {sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="section"
              data-block-section={i + 1}
            >
              {section.content}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
