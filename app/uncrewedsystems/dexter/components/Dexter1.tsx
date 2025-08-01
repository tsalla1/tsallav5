import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const HorizontalScrollPage = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      direction: "horizontal",
    });

    const blocks = document.querySelectorAll(".block[data-block-section]");
    scroll.on("scroll", () => {
      blocks.forEach((block) => {
        let attr = block.getAttribute("data-block-section");
        let section = document.querySelector(
          `section[data-block-section='${attr}']`
        );

        if (section.getBoundingClientRect().left <= block.offsetWidth * attr) {
          block.classList.add("fixed");
          block.classList.remove("init", "active");
          block.style.left = "";
        } else if (
          section.getBoundingClientRect().left >=
          window.innerWidth - block.offsetWidth * (blocks.length - attr)
        ) {
          block.classList.add("init");
          block.classList.remove("fixed", "active");
          block.style.left = "";
        } else {
          block.classList.add("active");
          block.classList.remove("init", "fixed");
        }

        if (block.classList.contains("active")) {
          block.style.left = section.getBoundingClientRect().left + "px";
        }
      });
    });

    return () => scroll.destroy();
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Grifinito L", sans-serif;
        }

        html, body {
          width: 100%;
          height: 100%;
          background: #a19a8f;
          overflow: hidden;
        }

        main {
          height: 100%;
          width: 100vw;
          display: flex;
          overflow: hidden;
        }

        section {
          width: 120vw;
          font-size: 6em;
          line-height: 1em;
          background: #a19a8f;
        }

        .wrap {
          display: flex;
          height: 100%;
        }

        .section {
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          left: -200px;
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
          z-index: 100;
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

        .block[data-block-section="2"].init { left: calc(100vw - 16rem); }
        .block[data-block-section="2"].fixed { left: 4rem; }

        .block[data-block-section="3"].init { left: calc(100vw - 12rem); }
        .block[data-block-section="3"].fixed { left: 8rem; }

        .block[data-block-section="4"].init { left: calc(100vw - 8rem); }
        .block[data-block-section="4"].fixed { left: 12rem; }

        .block[data-block-section="5"].init { left: calc(100vw - 4rem); }
        .block[data-block-section="5"].fixed { left: 16rem; }

        .block__title {
          position: relative;
          white-space: nowrap;
          transform: rotate(-90deg) translate(-50%);
          text-align: right;
        }

        .block__number, .block__title {
          text-transform: uppercase;
          font-size: 2rem;
          line-height: 1.06rem;
          color: #000;
        }
      `}</style>

      <div className="blocks">
        {[
          { section: 1, title: "Home" },
          { section: 2, title: "Collection" },
          { section: 3, title: "Material" },
          { section: 4, title: "Production" },
          { section: 5, title: "Journal" },
        ].map(({ section, title }) => (
          <div
            key={section}
            className="block init"
            data-block-section={section}
            data-href={title.toLowerCase()}
          >
            <div className="block__title">{title}</div>
            <div className="block__number">{`0${section}`}</div>
          </div>
        ))}
      </div>

      <main data-scroll-container>
        <div className="wrap" data-scroll-section>
          {[
            { id: "home", label: "Home" },
            { id: "collection", label: "Collection" },
            { id: "material", label: "Material" },
            { id: "production", label: "Production" },
            { id: "journal", label: "Journal" },
          ].map(({ id, label }, idx) => (
            <section
              key={id}
              className={`section ${id}`}
              data-block-section={idx + 1}
              id={id}
            >
              {label} Lorem Ipsum is <br />
              simply dummy text of the <br />
              printing and typesetting <br />
              industry.
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default HorizontalScrollPage;
