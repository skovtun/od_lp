import React from "react";
import { Button } from "../../../../components/ui/button";

export const TradeInfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-8 px-16 py-16">
      <h1 className="font-['Lato',Helvetica] font-black text-[#000607] text-[64px] tracking-[0] leading-[76.8px] max-w-[644px]">
        Built Like a God.
        <br />
        Engineered for DeFi.
      </h1>

      <p className="font-body-bold font-[number:var(--body-bold-font-weight)] text-[#000607] text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] [font-style:var(--body-bold-font-style)] max-w-[644px]">
        Odos finds you the best rates across multiple blockchains and DEXes —
        <br />
        so you get more for your crypto, with less gas and no hassle.
      </p>

      <div className="max-w-[644px]">
        <Button className="h-12 gap-2 px-6 py-0 bg-[#f57d0f] rounded-md border-b [border-bottom-style:solid] border-[#f6a154] font-['Lato',Helvetica] font-semibold text-white text-base">
          <img className="w-5 h-5" alt="Icon odos" src="/icon---odos.svg" />
          Launch Odos app
        </Button>
      </div>
    </section>
  );
};
