import React, { useRef, useEffect } from 'react';

interface MarqueeProps {
  speed: number;
  children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ speed, children }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationFrameId: number;

    const moveContent = () => {
      if (marquee) {
        marquee.scrollLeft += speed;
        if (marquee.scrollWidth <= marquee.scrollLeft + marquee.clientWidth) {
          marquee.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(moveContent);
    };

    moveContent();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div
      ref={marqueeRef}
      className="overflow-hidden whitespace-nowrap scroll-smooth"
    >
      {children}
    </div>
  );
};

export default Marquee;
