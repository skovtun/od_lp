import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const coinImages = [
  "/i/eth coin.png",
  "/i/crypto coin.png",
  "/i/avalanche coin.png",
  "/i/uniswap coin.png",
];

export const AnimatedAtensSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStruck, setHasStruck] = useState(false);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  useEffect(() => {
    const updateSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value >= 0.4 && !hasStruck) {
        setHasStruck(true);
        setTimeout(() => {
          controls.start("expose");
        }, 200);
      } else if (value < 0.4) {
        setHasStruck(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, hasStruck, controls]);

  return (
    <div
      ref={sectionRef}
      className="h-[900px] relative flex flex-col items-center overflow-hidden"
    >
      {/* Header */}
      <motion.img 
        src="/i/Athens.png" 
        alt="Atens" 
        className="w-full object-cover absolute top-0 left-0" 
        style={{ opacity: opacity }}
      />
      <div className="bg-[#FFFFFF99] p-8">

      </div>
    </div>
  );
};
