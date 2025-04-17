import React from "react";
import { Button } from "../../../../components/ui/button";

export const FeatureWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-4 md:px-16 py-12 w-full">
      <h2 className="text-4xl md:text-6xl lg:text-[64px] leading-tight lg:leading-[76.8px] font-black text-[#000607] text-center tracking-normal font-['Lato',Helvetica]">
        Trade multiple chains
        <br />
        and assets in one place
      </h2>

      <div className="flex items-center justify-center">
        <Button className="h-12 gap-2 px-6 bg-[#f57d0f] hover:bg-[#f57d0f]/90 text-white font-semibold rounded-md border-b border-[#f6a154] font-['Lato',Helvetica]">
          <img className="w-5 h-5" alt="Icon odos" src="/icon---odos-1.svg" />
          <span className="text-base leading-4">Launch Odos app</span>
        </Button>
      </div>
    </section>
  );
};
