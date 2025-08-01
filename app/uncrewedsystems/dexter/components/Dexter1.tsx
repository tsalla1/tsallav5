import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

// CSS is now included inside the component using a <style> tag.
const styles = `
  /* Note: It's often better to put global styles for html/body in a global CSS file like index.css */
  .horizontal-scroll-container, .horizontal-scroll-container body {
    width: 100%;
    height: 100%;
    background: #a19a8f;
    overflow: hidden;
    /* The original CSS used a custom font. You may need to host or import "Grifinito L" for an exact match. */
    font-family: sans-serif; 
  }

  .horizontal-scroll-container main {
    height: 100%;
    width: 100vw;
    display: flex;
    overflow: hidden;
  }

  .horizontal-scroll-container section {
    width: 120vw;
    font-size: 6em;
    line-height: 1em;
    background: #a19a8f;
  }

  .horizontal-scroll-container .wrap {
    display: flex;
    height: 100%;
  }

  .horizontal-scroll-container .section {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    left: -200px;
  }

  .horizontal-scroll-container .blocks {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    pointer-events: none;
  }

  .horizontal-scroll-container .block {
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

  .horizontal-scroll-container .block[data-block-section="2"].init {
    left: calc(100vw - 16rem);
  }

  .horizontal-scroll-container .block[data-block-section="2"].fixed {
    left: 4rem;
    border-left: 0.2rem solid #000;
  }

  .horizontal-scroll-container .block[data-block-section="3"].init {
    left: calc(100vw - 12rem);
  }

  .horizontal-scroll-container .block[data-block-section="3"].fixed {
    left: 8rem;
  }

  .horizontal-scroll-container .block[data-block-section="4"].init {
    left: calc(100vw - 8rem);
  }

  .horizontal-scroll-container .block[data-block-section="4"].fixed {
    left: 12rem;
  }

  .horizontal-scroll-container .block[data-block-section="5"].init {
    left: calc(100vw - 4rem);
  }

  .horizontal-scroll-container .block[data-block-section="5"].fixed {
    left: 16rem;
  }

  .horizontal-scroll-container .block__title {
    position: relative;
    white-space: nowrap;
    transform: rotate(-90deg) translate(-50%);
    text-align: right;
  }

  .horizontal-scroll-container .block__number,
  .horizontal-scroll-container .block__title {
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 1.06rem;
    color: #000;
  }
`;

const HorizontalScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    
    // Prefixing a class to body to scope global styles
    document.body.classList.add('horizontal-scroll-container');

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      direction: 'horizontal',
    });

    const blocks = scrollEl.parentElement.querySelectorAll('.block[data-block-section]');

    const scrollHandler = (args) => {
      blocks.forEach((block) => {
        const attr = block.getAttribute('data-block-section');
        const section = scrollEl.querySelector(`section[data-block-section='${attr}']`);
        
        if (!section) return;

        if (section.getBoundingClientRect().left <= block.offsetWidth * parseInt(attr)) {
          block.classList.add('fixed');
          block.classList.remove('init', 'active');
          block.style.left = '';
        } else if (
          section.getBoundingClientRect().left >=
          window.innerWidth - block.offsetWidth * (blocks.length - parseInt(attr) + 1)
        ) {
          block.classList.add('init');
          block.classList.remove('active', 'fixed');
          block.style.left = '';
        } else {
          block.classList.add('active');
          block.classList.remove('init', 'fixed');
        }

        if (block.classList.contains('active')) {
          block.style.left = `${section.getBoundingClientRect().left}px`;
        }
      });
    };

    scroll.on('scroll', scrollHandler);

    return () => {
      if (scroll) scroll.destroy();
      // Cleanup the class from body
      document.body.classList.remove('horizontal-scroll-container');
    };
  }, []);

  return (
    <div className="horizontal-scroll-container">
      <style>{styles}</style>
      <div className="blocks">
        <div className="block init" data-block-section="1" data-href="home">
          <div className="block__title">Home</div>
          <div className="block__number">01</div>
        </div>
        <div className="block init" data-block-section="2" data-href="collection">
          <div className="block__title">Collection</div>
          <div className="block__number">02</div>
        </div>
        <div className="block init" data-block-section="3" data-href="material">
          <div className="block__title">Material</div>
          <div className="block__number">03</div>
        </div>
        <div className="block init" data-block-section="4" data-href="production">
          <div className="block__title">Production</div>
          <div className="block__number">04</div>
        </div>
        <div className="block init" data-block-section="5" data-href="journal">
          <div className="block__title">Journal</div>
          <div className="block__number">05</div>
        </div>
      </div>

      <main data-scroll-container ref={scrollRef}>
        <div className="wrap" data-scroll-section>
          <section className="section home" data-block-section="1" id="home">
            Home Lorem Ipsum is <br />
            simply dummy text of the <br />
            printing and typesetting <br />
            industry.
          </section>
          <section className="section collection" data-block-section="2" id="collection">
            Collection Lorem Ipsum is <br />
            simply dummy text of the <br />
            printing and typesetting <br />
            industry.
          </section>
          <section className="section material" data-block-section="3" id="material">
            Material Lorem Ipsum is <br />
            simply dummy text of the <br />
            printing and typesetting <br />
            industry.
          </section>
          <section className="section production" data-block-section="4" id="production">
            Production Lorem Ipsum is <br />
            simply dummy text of the <br />
            printing and typesetting <br />
            industry.
          </section>
          <section className="section journal" data-block-section="5" id="journal">
            Journal Lorem Ipsum is <br />
            simply dummy text of the <br />
            printing and typesetting <br />
            industry.
          </section>
        </div>
      </main>
    </div>
  );
};

export default HorizontalScroll;
