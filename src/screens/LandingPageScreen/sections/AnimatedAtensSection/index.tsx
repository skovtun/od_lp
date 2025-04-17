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
  const buttonControls = useAnimation();

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
          buttonControls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 }
          });
        }, 200);
      } else if (value < 0.4) {
        setHasStruck(false);
        buttonControls.start({
          y: 50,
          opacity: 0
        });
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, hasStruck, controls, buttonControls]);

  return (
    <div
      ref={sectionRef}
      className="h-[900px] relative flex flex-col items-center justify-center overflow-hidden w-full"
    >
      {/* Header */}
      <motion.img
        src="/i/footer.png"
        alt="Atens"
        style={{ opacity: opacity, width: "200%" }}
        className="object-cover absolute top-0 left-0 rounded-[16px] z-10"
      />
      <motion.div
        className="bg-[#FFFFFF99] p-8 z-20 flex flex-col items-center gap-8 w-[1312px] relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={controls}
        variants={{
          expose: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 }
          }
        }}
      >
        <div className="text-[64px] font-black text-center">
          Odos brings the power of
          <br />
          trading DeFi to everyone.
        </div>
        <motion.button
          className="flex items-center gap-2 px-6 py-3 bg-[#f57d0f] text-white rounded-[6px] relative z-20"
          initial={{ y: 50, opacity: 0 }}
          animate={buttonControls}
        >
          <img className="w-5 h-5" alt="Odos icon" src="/i/Odos.svg" />
          <span>Launch Odos app</span>
        </motion.button>
        <img
          src="/i/footer-main.png"
          alt="Odos statue"
          className="absolute top-0 right-0 h-full"
        />
      </motion.div>
    </div>
  );
};
