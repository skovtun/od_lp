import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center px-16">
      {/* Background statue */}
      <div className="absolute top-0 right-0 h-full w-1/2 z-10">
        <img
          src="/i/odos man.png"
          alt="Odos statue"
          className="h-full w-full object-contain object-right"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[644px]">
        <h1 className="text-[64px] font-black text-[#000607] leading-[1.2] mb-6">
          Built Like a God.
          <br />
          Engineered for DeFi.
        </h1>
        <p className="text-[#000607] text-xl mb-8 leading-relaxed">
          Odos finds you the best rates across multiple blockchains and DEXes —
          <br />
          so you get more for your crypto, with less gas and no hassle.
        </p>
        <Button className="h-12 px-6">
          <img className="w-5 h-5" alt="Odos icon" src="/i/Odos.svg" />
          Launch Odos app
        </Button>
      </div>

      {/* Animated clouds */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <img
            src="/i/cloud.png"
            alt="Cloud background"
            className="absolute bottom-0 w-full h-full object-cover opacity-50"
          />
          <img
            src="/i/cloud-2.png"
            alt="Cloud overlay"
            className="absolute bottom-0 w-full h-full object-cover opacity-30"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-20">
        <p className="text-sm text-[#000607] mb-4">
          Scroll to see what Odos is and why you need it
        </p>
        <div className="w-1 h-6 mx-auto border-2 border-[#000607] rounded-full">
          <div className="w-0.5 h-1.5 bg-[#000607] mx-auto mt-1 rounded-full" />
        </div>
      </div>
    </section>
  );
};