import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const StatsSection = (): JSX.Element => {
  // Data for stats to enable mapping
  const statsData = [
    {
      value: "3M+",
      description: "Unique wallets served",
    },
    {
      value: "$6B+",
      description: "Trade volume monthly",
    },
    {
      value: "900+",
      description: "Liquidity sources",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 p-16 relative w-full">
      <h2 className="self-stretch mt-[-1.00px] font-['Lato',Helvetica] font-black text-[#000607] text-[64px] text-center tracking-[0] leading-[76.8px]">
        Trusted by millions of traders —<br />
        united by power, trust, and Odos.
      </h2>

      <div className="flex justify-center self-stretch w-full items-start gap-6 relative">
        <Button className="h-12 gap-2 px-6 py-0 bg-[#f57d0f] rounded-md border-b border-[#f6a154] hover:bg-[#f57d0f]/90">
          <img className="w-5 h-5" alt="Icon odos" src="/icon---odos.svg" />
          <span className="font-['Lato',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
            Start Odos Now
          </span>
        </Button>
      </div>

      <div className="w-full flex justify-center mt-16">
        <div className="flex flex-wrap justify-center gap-8">
          {statsData.map((stat, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardContent className="flex flex-col items-center p-8">
                <div className="mt-[-1.00px] [background:linear-gradient(0deg,rgba(0,6,7,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Lato',Helvetica] font-black text-transparent text-[56px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="font-extra-large font-[number:var(--extra-large-font-weight)] text-[#000607] text-[length:var(--extra-large-font-size)] text-center tracking-[var(--extra-large-letter-spacing)] leading-[var(--extra-large-line-height)] whitespace-nowrap [font-style:var(--extra-large-font-style)]">
                  {stat.description}
                </div>
              </CardContent>
              <img
                className="w-[480px] h-[721px] object-cover"
                alt="Column"
                src="/-column-photoroom-cleanup-photoroom-5.png"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
