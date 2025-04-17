import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation, Variants } from "framer-motion";

const valueVariants: Variants = {
  initial: { y: 100 },
  expose: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  float: {
    y: [0, -10, 0, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

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

  const headerScale = useTransform(scrollYProgress, [0.1, 0.3], [2, 1]);
  const headerY = useTransform(scrollYProgress, [0.1, 0.3], ["100px", `300px`]);
  const buttonOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  const columnTextOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  const opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const footerHeaderScale = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const footerHeaderOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const footerButtonOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const footerButtonY = useTransform(scrollYProgress, [0.6, 0.7], ["100px", "0px"]);

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
          setTimeout(() => {
            controls.start("float");
          }, 800);
        }, 200);
      } else if (value < 0.4) {
        setHasStruck(false);
        controls.start("initial");
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, hasStruck, controls]);

  return (
    <div
      ref={sectionRef}
      className="h-[2000px] relative flex flex-col items-center overflow-hidden w-full"
    >
      {/* Header */}
      <motion.h2
        style={{ scale: headerScale, y: headerY }}
        className="text-[64px] font-black text-center text-[#000607] leading-tight z-10"
      >
        Trusted by millions of traders —<br />
        united by power, trust, and Odos.
      </motion.h2>
      <motion.button
        style={{ opacity: buttonOpacity }}
        className="flex items-center gap-2 px-6 py-3 bg-[#f57d0f] text-white rounded-[6px] relative z-20 mt-[332px]"
      >
        <img className="w-5 h-5" alt="Odos icon" src="/i/Odos.svg" />
        <span>Launch Odos app</span>
      </motion.button>

      <div className="flex w-full justify-center mt-4">
        <div className="text-center flex flex-col items-center mt-[122px]">
          <motion.div
            className="flex flex-col items-center justify-center w-[259px] h-[159px]"
            variants={valueVariants}
            initial="initial"
            animate={controls}
            transition={{ delay: 0.2 }}
            style={{ opacity: columnTextOpacity }}
          >
            <div className="text-[56px] font-black">3M+</div>
            <div className="text-[20px] font-semibold">Unique wallets served</div>
          </motion.div>
          <motion.img
            initial={false}
            src="/i/column.png"
            alt="Trust section 1"
            style={{ opacity: column1Opacity, y: column1Y }}
            className="mt-[100px]"
          />
        </div>
        <div className="text-center flex flex-col items-center">
          <motion.div
            className="flex flex-col items-center justify-center w-[259px] h-[159px]"
            variants={valueVariants}
            initial="initial"
            animate={controls}
            transition={{ delay: 0.4 }}
            style={{ opacity: columnTextOpacity }}
          >
            <div className="text-[56px] font-black">$6B+</div>
            <div className="text-[20px] font-semibold">Trade volume monthly</div>
          </motion.div>
          <motion.img
            initial={false}
            src="/i/column.png"
            alt="Trust section 1"
            style={{ opacity: column2Opacity, y: column2Y }}
            className="mt-[100px]"
          />
        </div>
        <div className="text-center flex flex-col items-center mt-[53px]">
          <motion.div
            className="flex flex-col items-center justify-center w-[259px] h-[159px]"
            variants={valueVariants}
            initial="initial"
            animate={controls}
            transition={{ delay: 0.6 }}
            style={{ opacity: columnTextOpacity }}
          >
            <div className="text-[56px] font-black">900+</div>
            <div className="text-[20px] font-semibold">Liquidity sources</div>
          </motion.div>
          <motion.img
            initial={false}
            src="/i/column.png"
            alt="Trust section 1"
            style={{ opacity: column3Opacity, y: column3Y }}
            className="mt-[100px]"
          />
        </div>
      </div>
      <div
        className="h-[900px] flex flex-col items-center justify-center overflow-hidden w-full absolute top-[1100px]"
      >
        <motion.img
          src="/i/footer.png"
          alt="Atens"
          className="absolute top-0 left-1/2 -translate-x-1/2 transform rounded-[16px] z-10 max-w-fit object-cover"
          style={{ opacity: opacity}}
        />
        {/* Header */}
        <motion.div
          className="bg-[#FFFFFF99] p-8 z-20 flex flex-col items-center gap-8 w-[1312px] relative"
          style={{ scale: footerHeaderScale, opacity: footerHeaderOpacity }}
        >
          <div className="text-[64px] font-black text-center">
            Odos brings the power of
            <br />
            trading DeFi to everyone.
          </div>
          <motion.button
            className="flex items-center gap-2 px-6 py-3 bg-[#f57d0f] text-white rounded-[6px] relative z-20"
            style={{ opacity: footerButtonOpacity, y: footerButtonY }}
          >
            <img className="w-5 h-5" alt="Odos icon" src="/i/Odos.svg" />
            <span>Launch Odos app</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
