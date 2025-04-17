import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TrustSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-8 py-16 w-full">
      <img
        className="absolute w-full h-full top-0 left-0 object-cover"
        alt="Athens background"
        src="/i/Athens.png"
      />

      <Card className="w-full bg-[#ffffff99] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
        <CardContent className="flex flex-col items-start gap-8 p-8">
          <h2 className="w-full font-['Lato',Helvetica] font-black text-[#000607] text-[64px] text-center leading-[76.8px]">
            Why trade like it&#39;s 2022?
            <br />
            Welcome to the new standard of DeFi.
          </h2>

          <div className="flex items-start justify-center gap-6 w-full">
            <Button className="h-12 gap-2 px-6 bg-[#f57d0f] rounded-md border-b border-[#f6a154] hover:bg-[#f57d0f]/90">
              <img
                className="w-5 h-5"
                alt="Odos icon"
                src="/i/Odos copy.svg"
              />
              <span className="font-['Lato',Helvetica] font-semibold text-white text-base leading-4">
                Earn with Odos
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};