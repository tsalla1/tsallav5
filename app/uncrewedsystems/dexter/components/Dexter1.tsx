import { useEffect, useRef, useState } from "react";

export default function HorizontalScrollSections(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [blockStates, setBlockStates] = useState<{ [key: number]: string }>({
    1: 'init',
    2: 'init',
    3: 'init',
    4: 'init',
    5: 'init'
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let scrollAmount = 0;
    const maxScroll = container.scrollWidth - container.clientWidth;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      scrollAmount += e.deltaY * 2;
      scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll));
      
      container.scrollLeft = scrollAmount;
      setScrollPosition(scrollAmount);
      
      updateBlockStates();
    };

    const updateBlockStates = () => {
      const sections = container.querySelectorAll('[data-block-section]');
      const blocks = document.querySelectorAll('.block[data-block-section]');
      const newBlockStates: { [key: number]: string } = {};

      blocks.forEach((block) => {
        const attr = parseInt(block.getAttribute('data-block-section') || '1');
        const section = container.querySelector(`section[data-block-section='${attr}']`) as HTMLElement;
        
        if (!section) return;

        const blockWidth = 64; // 4rem = 64px
        const sectionRect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const sectionLeft = sectionRect.left - containerRect.left;

        if (sectionLeft <= blockWidth * attr) {
          newBlockStates[attr] = 'fixed';
        } else if (sectionLeft >= window.innerWidth - blockWidth * (5 - attr)) {
          newBlockStates[attr] = 'init';
        } else {
          newBlockStates[attr] = 'active';
        }
      });

      setBlockStates(newBlockStates);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    // Initial state update
    updateBlockStates();

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const getBlockStyle = (section: number): React.CSSProperties => {
    const state = blockStates[section];
    const blockWidth = 64; // 4rem
    
    let baseStyle: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      width: '4rem',
      height: '100%',
      background: '#a19a8f',
      zIndex: 100,
      padding: '2rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer',
      borderLeft: '0.2rem solid #000',
      fontWeight: 500,
      transition: 'left 0.3s ease'
    };

    switch (state) {
      case 'init':
        switch (section) {
          case 1:
            baseStyle.left = '0';
            break;
          case 2:
            baseStyle.left = 'calc(100vw - 16rem)';
            break;
          case 3:
            baseStyle.left = 'calc(100vw - 12rem)';
            break;
          case 4:
            baseStyle.left = 'calc(100vw - 8rem)';
            break;
          case 5:
            baseStyle.left = 'calc(100vw - 4rem)';
            break;
        }
        break;
      case 'fixed':
        baseStyle.left = `${(section - 1) * blockWidth}px`;
        break;
      case 'active':
        // Calculate dynamic position based on scroll
        const section_element = document.querySelector(`section[data-block-section='${section}']`) as HTMLElement;
        if (section_element) {
          const rect = section_element.getBoundingClientRect();
          baseStyle.left = `${Math.max(0, rect.left)}px`;
        }
        break;
    }

    return baseStyle;
  };

  const sections = [
    { id: 1, name: 'Home', content: 'Home Lorem Ipsum is\nsimply dummy text of the\nprinting and typesetting\nindustry.' },
    { id: 2, name: 'Collection', content: 'Collection Lorem Ipsum is\nsimply dummy text of the\nprinting and typesetting\nindustry.' },
    { id: 3, name: 'Material', content: 'Material Lorem Ipsum is\nsimply dummy text of the\nprinting and typesetting\nindustry.' },
    { id: 4, name: 'Production', content: 'Production Lorem Ipsum is\nsimply dummy text of the\nprinting and typesetting\nindustry.' },
    { id: 5, name: 'Journal', content: 'Journal Lorem Ipsum is\nsimply dummy text of the\nprinting and typesetting\nindustry.' }
  ];

  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      height: '100vh',
      background: '#a19a8f',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Navigation Blocks */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 100,
        pointerEvents: 'none'
      }}>
        {sections.map((section) => (
          <div
            key={section.id}
            className="block"
            data-block-section={section.id}
            style={{
              ...getBlockStyle(section.id),
              pointerEvents: 'auto'
            }}
          >
            <div style={{
              position: 'relative',
              whiteSpace: 'nowrap',
              transform: 'rotate(-90deg) translate(-50%)',
              textAlign: 'right',
              textTransform: 'uppercase',
              fontSize: '2rem',
              lineHeight: '1.06rem',
              color: '#000'
            }}>
              {section.name}
            </div>
            <div style={{
              textTransform: 'uppercase',
              fontSize: '2rem',
              lineHeight: '1.06rem',
              color: '#000'
            }}>
              {section.id.toString().padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main style={{
        height: '100%',
        width: '100vw',
        display: 'flex',
        overflow: 'hidden'
      }}>
        <div
          ref={containerRef}
          style={{
            display: 'flex',
            height: '100%',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollBehavior: 'smooth'
          }}
        >
          {sections.map((section) => (
            <section
              key={section.id}
              data-block-section={section.id}
              id={section.name.toLowerCase()}
              style={{
                width: '120vw',
                fontSize: '6em',
                lineHeight: '1em',
                background: '#a19a8f',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                left: '-200px',
                color: '#000',
                whiteSpace: 'pre-line'
              }}
            >
              {section.content}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
