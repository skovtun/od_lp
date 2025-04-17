import React from "react";
import { motion } from "framer-motion";
import { ScrollSection } from "../../components/ScrollSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { AnimatedTradeSection } from "./sections/AnimatedTradeSection";

export const LandingPageScreen = (): JSX.Element => {
  return (
    <div className="relative">
      <NavigationBarSection />
      
      {/* Hero Section */}
      <ScrollSection className="bg-[#fcfcfc]">
        <div className="container mx-auto px-4 mb-32 relative z-20">
          <div className="flex flex-col items-start max-w-[644px]">
            <h1 className="text-[64px] font-black text-[#000607] leading-[1.2] mb-6">
              Built Like a God.
              <br />
              Engineered for DeFi.
            </h1>
            <p className="text-[#000607] text-xl mb-8">
              Odos finds you the best rates across multiple blockchains and DEXes —
              <br />
              so you get more for your crypto, with less gas and no hassle.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#f57d0f] text-white rounded-md relative z-20">
              <img className="w-5 h-5" alt="Odos icon" src="/i/Odos.svg" />
              <span>Launch Odos app</span>
            </button>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute right-0 top-0 h-full w-1/2 z-0">
          <img
            src="/i/odos man.png"
            alt="Odos statue"
            className="h-full w-full object-contain object-right"
          />
        </div>

        {/* Animated Clouds */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-10">
          <div className="relative h-[450px] overflow-hidden">
            {/* First cloud - starting 50% visible from left */}
            <motion.div
              className="absolute bottom-0 w-full h-full"
              initial={{ x: "-50%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
                delay: 0,
              }}
            >
              <img
                src="/i/cloud.png"
                alt="Cloud 1"
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            {/* Second cloud - starting fully visible from right */}
            <motion.div
              className="absolute bottom-0 w-full h-full"
              initial={{ x: "0%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
                delay: 0,
              }}
            >
              <img
                src="/i/cloud-2.png"
                alt="Cloud 2"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-20">
          <p className="text-sm text-[#000607] mb-4">
            Scroll to see what Odos is and why you need it
          </p>
          <motion.img
            src="/i/scroll.svg"
            alt="Scroll indicator"
            className="w-6 h-6 mx-auto"
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </ScrollSection>

      {/* Animated Trade Section */}
      <AnimatedTradeSection />
    </div>
  );
};