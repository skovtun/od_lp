import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { AnimatedSecureSection } from "../AnimatedSecureSection/AnimatedSecureSection";
import { AnimatedTrustSection } from "../AnimatedTrustSection";
import { AnimatedAtensSection } from "../AnimatedAtensSection";

const coinImages = [
    "/i/eth coin.png",
    "/i/crypto coin.png",
    "/i/avalanche coin.png",
    "/i/uniswap coin.png",
];

export const CombinedFeaturesSection = (): JSX.Element => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [hasStruck, setHasStruck] = useState(false);
    const [scatterCoins, setScatterCoins] = useState(false);
    const controls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

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

    const lightningX = useTransform(scrollYProgress, [0, 0.2], ["0%", `${screenSize.width / 2 - 150}px`]);
    const lightningY = useTransform(scrollYProgress, [0, 0.2], ["10%", `500px`]);
    const lightningScale = useTransform(scrollYProgress, [0, 0.2], [2, 1]);

    const headerScale = useTransform(scrollYProgress, [0, 0.2], [2, 1]);

    // Animations for stat
    const buttonOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    const coinOpacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (value) => {
            if (value >= 0.2 && !hasStruck) {
                setHasStruck(true);
                setTimeout(() => {
                    controls.start("expose");
                    setScatterCoins(true);
                }, 200);
            } else if (value < 0.2) {
                setHasStruck(false);
                setScatterCoins(false);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, hasStruck, controls]);

    return (
        <div
            ref={sectionRef}
            className="min-h-[2000px] relative flex flex-col items-center overflow-hidden bg-[#fcfcfc]"
        >
            <motion.h2
                style={{ scale: headerScale, marginTop: "200px" }}
                className="text-[64px] font-black text-center text-[#000607] leading-tight z-30"
            >
                Break boundaries.<br />
                Trade multiple chains<br />
                and assets in one place.
            </motion.h2>
            <motion.button
                style={{ opacity: buttonOpacity }}
                className="flex items-center gap-2 px-6 py-3 bg-[#f57d0f] text-white rounded-[6px] relative z-20 mt-8"
            >
                <img className="w-5 h-5" alt="Odos icon" src="/i/Odos.svg" />
                <span>Launch Odos app</span>
            </motion.button>

            {/* Lightning — same original position + animated motion */}
            {!hasStruck && (
                <motion.img
                    src="/i/lightning bolt.png"
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
                            top: "600px",
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
                    top: "600px",
                    left: "calc(50% - 100px)",
                    transform: "translate(-50%)",
                }}
                className="w-[200px] h-[200px] object-contain absolute z-10"
            />

            {scatterCoins &&
                Array.from({ length: 8 }).map((_, i) => {
                    const image = coinImages[Math.floor(Math.random() * coinImages.length)];
                    const spreadX = Math.random() * screenSize.width - screenSize.width / 2;
                    const launchHeight = screenSize.height * 0.6;
                    const finalY = -100 + Math.random() * 3000;
                    const bounceHeight1 = finalY * 0.2;
                    const bounceHeight2 = finalY * 0.4;
                    const bounceHeight3 = finalY * 0.6;
                    const bounceHeight4 = finalY * 0.8;

                    return (
                        <motion.img
                            key={`coin-${i}`}
                            src={image}
                            alt={`Coin ${i}`}
                            initial={{
                                x: -40,
                                y: "calc(50% - 100px)",
                                scale: 1,
                            }}
                            animate={{
                                x: spreadX,
                                y: [-150, -launchHeight, bounceHeight1, bounceHeight2, bounceHeight3, bounceHeight4, finalY],
                                rotate: Math.random() * 360,
                            }}
                            transition={{
                                duration: 2.5,
                                ease: [0.2, 0.8, 0.2, 0.8],
                                times: [0, 0.2, 0.6, 0.7, 0.8, 0.9, 1],
                            }}
                            className="w-[80px] h-[80px] object-contain absolute z-10"
                            style={{
                                left: "50%",
                                top: "800px",
                                transform: "translateX(-50%)",
                                opacity: coinOpacity,
                            }}
                        />
                    );
                })}
            <AnimatedSecureSection />
            <AnimatedTrustSection />
            {/* <AnimatedAtensSection /> */}
        </div>
    );
}; 