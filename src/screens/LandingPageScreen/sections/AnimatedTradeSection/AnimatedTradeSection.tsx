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

  const headerScale = useTransform(scrollYProgress, [0.2, 0.4], [2, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

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

  const lightningX = useTransform(scrollYProgress, [0.2, 0.4], ["0%", `${screenSize.width / 2 - 150}px`]);
  const lightningY = useTransform(scrollYProgress, [0.2, 0.4], ["0%", `270px`]);
  const lightningScale = useTransform(scrollYProgress, [0.2, 0.4], [2, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value >= 0.4 && !hasStruck) {
        setHasStruck(true);
        setTimeout(() => {
          controls.start("expose");
          setScatterCoins(true);
        }, 200);
      } else if (value < 0.4) {
        setHasStruck(false);
        setScatterCoins(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, hasStruck, controls]);

  return (
    <div
      ref={sectionRef}
      className="min-h-[800px] relative flex flex-col items-center overflow-hidden"
    >
      {/* Header */}
      <motion.h2
        style={{ scale: headerScale, marginTop: "60px" }}
        className="text-[64px] font-black text-center text-[#000607] leading-tight z-30"
      >
        Trade multiple chains
        <br />
        and assets in one place
      </motion.h2>
      <motion.button
        style={{ opacity: buttonOpacity }}
        className="flex items-center gap-2 px-6 py-3 bg-[#f57d0f] text-white rounded-md relative z-20 mt-8"
      >
        <img className="w-5 h-5" alt="Odos icon" src="/i/Odos.svg" />
        <span>Launch Odos app</span>
      </motion.button>

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
          className="w-[200px] h-[200px] object-contain absolute top-0 left-0 z-20 pointer-events-none"
          initial={false}
        />
      )}

      {/* Odos Coin at bottom */}
      {!scatterCoins && (
        <>
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
            style={{
              top: "350px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="w-[200px] h-[200px] object-contain absolute z-10"
          />
        </>
      )}

      <motion.img
        src="/i/blow.png"
        alt="Blow Effect"
        initial={{ opacity: 0, scale: 0 }}
        animate={controls}
        variants={{
          expose: {
            opacity: [0, 1, 0],
            scale: [0, 1.5, 2],
            transition: { duration: 1, ease: "easeOut" },
          },
        }}
        style={{
          top: "300px",
          left: "calc(50% - 100px)",
          transform: "translate(-50%)",
        }}
        className="w-[200px] h-[200px] object-contain absolute z-10"
      />

      {/* Coins: launch from bottom center, fly up, fall and bounce */}
      {scatterCoins &&
        Array.from({ length: 8 }).map((_, i) => {
          const image = coinImages[Math.floor(Math.random() * coinImages.length)];
          const spreadX = Math.random() * screenSize.width - screenSize.width / 2;
          const launchHeight = screenSize.height * 0.6;
          const finalY = -100 + Math.random() * 400;

          return (
            <motion.img
              key={`coin-${i}`}
              src={image}
              alt={`Coin ${i}`}
              initial={{
                x: -40,
                y: -150,
                scale: 1,
              }}
              animate={{
                x: spreadX,
                y: [-150, -launchHeight, finalY],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                times: [0, 0.1, 0.4],
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
    </div>
  );
};
