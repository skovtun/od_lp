import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const coinImages = [
  "/i/eth coin.png",
  "/i/crypto coin.png",
  "/i/avalanche coin.png",
  "/i/uniswap coin.png",
];

export const AnimatedTradeSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStruck, setHasStruck] = useState(false);
  const [scatterCoins, setScatterCoins] = useState(false);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerScale = useTransform(scrollYProgress, [0.3, 0.5], [2, 1]);

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

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

  const lightningX = useTransform(scrollYProgress, [0.3, 0.5], ["0%", `${screenSize.width / 2 - 100}px`]);
  const lightningY = useTransform(scrollYProgress, [0.3, 0.5], ["0%", `${screenSize.height - 200}px`]);
  const lightningScale = useTransform(scrollYProgress, [0.3, 0.5], [2, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value >= 0.5 && !hasStruck) {
        setHasStruck(true);
        setTimeout(() => {
          controls.start("expose");
          setScatterCoins(true);
        }, 200);
      } else if (value < 0.5) {
        setHasStruck(false);
        setScatterCoins(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, hasStruck, controls]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Header */}
      <motion.h2
        style={{ scale: headerScale }}
        className="text-[64px] font-black text-center text-[#000607] leading-tight z-20"
      >
        Trade multiple chains
        <br />
        and assets in one place
      </motion.h2>

      {/* Lightning — same original position + animated motion */}
      {!hasStruck && (
        <motion.img
          src="/i/lightning.png"
          alt="Lightning"
          style={{
            x: lightningX,
            y: lightningY,
            scale: lightningScale,
          }}
          className="w-[200px] h-[200px] object-contain absolute top-0 left-0 z-10 pointer-events-none"
          // 🔒 keep original margin offset
          initial={false}
        />
      )}

      {/* Odos Coin at bottom */}
      {!scatterCoins && (
        <motion.img
          src="/i/odos coin.png"
          alt="Odos Coin"
          animate={controls}
          variants={{
            expose: {
              opacity: 0,
              scale: 2,
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
          className="w-[200px] h-[200px] object-contain absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-20"
        />
      )}

      {/* Coins: launch from bottom center, fly up, fall and bounce */}
      {scatterCoins &&
        Array.from({ length: 12 }).map((_, i) => {
          const image = coinImages[Math.floor(Math.random() * coinImages.length)];
          const spreadX = Math.random() * screenSize.width - screenSize.width / 2;
          const launchHeight = screenSize.height * 0.6;
          const bounce = -30 + Math.random() * 10;

          return (
            <motion.img
              key={`coin-${i}`}
              src={image}
              alt={`Coin ${i}`}
              initial={{
                x: 0,
                y: 0,
                scale: 1,
              }}
              animate={{
                x: spreadX,
                y: [0, -launchHeight, bounce, 0],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                times: [0, 0.4, 0.8, 1],
              }}
              className="w-[80px] h-[80px] object-contain absolute z-20"
              style={{
                left: "50%",
                bottom: "100px",
                transform: "translateX(-50%)",
              }}
            />
          );
        })}
    </section>
  );
};
