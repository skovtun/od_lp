import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const coinImages = [
  "/i/eth coin.png",
  "/i/crypto coin.png",
  "/i/avalanche coin.png",
  "/i/uniswap coin.png",
];

export const AnimatedTrustSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStruck, setHasStruck] = useState(false);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const column1Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const column2Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const column3Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const column1Y = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "-100px"]);
  const column2Y = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "-100px"]);
  const column3Y = useTransform(scrollYProgress, [0.3, 0.5], ["0%", "-100px"]);

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
      <h2
        className="text-[64px] font-black text-center text-[#000607] leading-tight z-30"
      >
        Trusted by millions
        <br />
        of traders like you.
      </h2>
      <button
        className="flex items-center gap-2 px-6 py-3 bg-[#f57d0f] text-white rounded-md relative z-20 mt-8"
      >
        <img className="w-5 h-5" alt="Odos icon" src="/i/Odos.svg" />
        <span>Launch Odos app</span>
      </button>

      <div className="flex w-full justify-center mt-4">
        <div className="text-center flex flex-col items-center mt-[122px]">
            <div className="flex flex-col items-center justify-center w-[259px] h-[159px]">
                <div className="text-[56px] font-black">3M+</div>
                <div className="text-[20px] font-semibold">Unique wallets served</div>
            </div>
            <motion.img 
                initial={false}
                src="/i/column.png" 
                alt="Trust section 1" 
                style={{ opacity: column1Opacity, y: column1Y }}
                className="mt-[100px]"
            />
        </div>
        <div className="text-center flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-[259px] h-[159px]">
                <div className="text-[56px] font-black">$6B+</div>
                <div className="text-[20px] font-semibold">Trade volume monthly</div>
            </div>
            <motion.img 
                initial={false}
                src="/i/column.png" 
                alt="Trust section 1" 
                style={{ opacity: column2Opacity, y: column2Y }}
                className="mt-[100px]"
            />
        </div>
        <div className="text-center flex flex-col items-center mt-[53px]">
            <div className="flex flex-col items-center justify-center w-[259px] h-[159px]">
                <div className="text-[56px] font-black">900+</div>
                <div className="text-[20px] font-semibold">Liquidity sources</div>
            </div>
            <motion.img 
                initial={false}
                src="/i/column.png" 
                alt="Trust section 1" 
                style={{ opacity: column3Opacity, y: column3Y }}
                className="mt-[100px]"
            />
        </div>
      </div>
    </div>
  );
};
