import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

export const AnimatedSecureSection = (): JSX.Element => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [hasStruck, setHasStruck] = useState(false);
    const controls = useAnimation();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const headerScale = useTransform(scrollYProgress, [0.2, 0.4], [2, 1]);
    const headerY = useTransform(scrollYProgress, [0.2, 0.4], ["100px", `300px`]);
    const headerOpacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);
    const buttonOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

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

    const soc2x = useTransform(scrollYProgress, [0.2, 0.4], ["0%", `${screenSize.width / 2 - 300}px`]);
    const soc2y = useTransform(scrollYProgress, [0.2, 0.4], ["0%", `200px`]);
    const securityX = useTransform(scrollYProgress, [0.2, 0.4], ["0%", `-${screenSize.width / 2 + 50}px`]);
    const securityY = useTransform(scrollYProgress, [0.2, 0.4], ["0%", `200px`]);
    const transparentX = useTransform(scrollYProgress, [0.2, 0.4], ["0%", `${screenSize.width / 2 + 140}px`]);
    const transparentY = useTransform(scrollYProgress, [0.2, 0.4], ["0%", `-${screenSize.height / 2 - 295}px`]); 
    const teamX = useTransform(scrollYProgress, [0.2, 0.4], ["0%", `-${screenSize.width / 2 - 390}px`]);
    const teamY = useTransform(scrollYProgress, [0.2, 0.4], ["0%", `-${screenSize.height / 2 - 295}px`]);

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
            className="min-h-[600px] relative flex flex-col items-center overflow-hidden w-full mt-96"
        >
            {/* Header */}
            <motion.h2
                style={{ scale: headerScale, y: headerY, opacity: headerOpacity }}
                className="text-[64px] font-black text-center text-[#000607] leading-tight z-10"
            >
                Secure. Transparent.
                <br />
                Built for trust.
            </motion.h2>
            <motion.button
                style={{ opacity: buttonOpacity }}
                className="flex items-center gap-2 px-6 py-3 bg-[#f57d0f] text-white rounded-[6px] relative z-20 mt-80"
            >
                <img className="w-5 h-5" alt="Odos icon" src="/i/Odos.svg" />
                <span>Launch Odos app</span>
            </motion.button>
            <motion.div
                initial={false}
                style={{
                    x: soc2x,
                    y: soc2y,
                }}
                className="w-[196px] h-[220px] bg-[#F5F5F5] border-[#EAEAEA] rounded-[16px] p-6 flex flex-col gap-4 absolute top-0 -left-[90px] z-20 pointer-events-none"
            >
                <div className="text-[20px] font-semibold text-[#000607]">SOC 2 Compliant</div>
                <div className="text-[16px] text-[#78909C] font-medium">Enterprise-grade data security and operational integrity.</div>
            </motion.div>
            <motion.div
                initial={false}
                style={{
                    x: securityX,
                    y: securityY,
                }}
                className="w-[196px] h-[220px] bg-[#F5F5F5] border-[#EAEAEA] rounded-[16px] p-6 flex flex-col gap-4 absolute top-0 -right-[90px] z-20 pointer-events-none"
            >
                <div className="text-[20px] font-semibold text-[#000607]">Security-First Architecture</div>
                <div className="text-[16px] text-[#78909C] font-medium">Designed with rigorous smart contract audits and best practices.</div>
            </motion.div>
            <motion.div
                initial={false}
                style={{
                    x: transparentX,
                    y: transparentY,
                }}
                className="w-[196px] h-[220px] bg-[#F5F5F5] border-[#EAEAEA] rounded-[16px] p-6 flex flex-col gap-4 absolute bottom-0 -left-[90px] z-20 pointer-events-none"
            >
                <div className="text-[20px] font-semibold text-[#000607]">Transparent Infrastructure</div>
                <div className="text-[16px] text-[#78909C] font-medium">No hidden fees. No opaque routing. What you see is what you swap.</div>
            </motion.div>
            <motion.div
                initial={false}
                style={{
                    x: teamX,
                    y: teamY,
                }}
                className="w-[196px] h-[220px] bg-[#F5F5F5] border-[#EAEAEA] rounded-[16px] p-6 flex flex-col gap-4 absolute bottom-0 -right-[90px] z-20 pointer-events-none"
            >
                <div className="text-[20px] font-semibold text-[#000607]">US-Based Team</div>
                <div className="text-[16px] text-[#78909C] font-medium">Built and supported by a fully U.S.-based engineering and operations team.</div>
            </motion.div>
        </div>
    );
};
