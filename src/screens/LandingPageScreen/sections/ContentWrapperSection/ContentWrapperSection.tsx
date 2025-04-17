import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentWrapperSection = (): JSX.Element => {
  // Data for feature cards
  const featureCards = [
    {
      id: 1,
      title: "SOC 2 Compliant",
      description: "Enterprise-grade data security and operational integrity.",
      position: "top-[19px] left-[-34px]",
    },
    {
      id: 2,
      title: "Transparent Infrastructure",
      description:
        "No hidden fees. No opaque routing. What you see is what you swap.",
      position: "top-[358px] left-[-83px]",
    },
    {
      id: 3,
      title: "Security-First Architecture",
      description:
        "Designed with rigorous smart contract audits and best practices.",
      position: "top-[43px] left-[1278px]",
    },
    {
      id: 4,
      title: "US-Based Team",
      description:
        "Built and supported by a fully U.S.-based engineering and operations team.",
      position: "top-[375px] left-[1302px]",
    },
  ];

  // Data for decorative images
  const decorativeImages = [
    {
      id: 1,
      src: "/chatgpt-image-apr-10--2025-at-11-09-19-pm-photoroom-5-1.png",
      alt: "Chatgpt image apr",
      position: "top-[225px] left-[865px]",
      size: "w-[92px] h-[92px]",
    },
    {
      id: 2,
      src: "/chatgpt-image-apr-10--2025-at-11-09-19-pm-photoroom-4-1.png",
      alt: "Chatgpt image apr",
      position: "top-[847px] left-[372px]",
      size: "w-20 h-20",
    },
    {
      id: 3,
      src: "/chatgpt-image-apr-10--2025-at-11-09-19-pm-photoroom-3-1.png",
      alt: "Chatgpt image apr",
      position: "top-[255px] left-[206px]",
      size: "w-[99px] h-[99px]",
    },
    {
      id: 4,
      src: "/chatgpt-image-apr-10--2025-at-11-09-19-pm-photoroom-6-1.png",
      alt: "Chatgpt image apr",
      position: "top-[65px] left-[497px]",
      size: "w-[78px] h-[78px]",
    },
    {
      id: 5,
      src: "/chatgpt-image-apr-10--2025-at-11-09-19-pm-photoroom-7-1.png",
      alt: "Chatgpt image apr",
      position: "top-[272px] left-[1097px]",
      size: "w-[83px] h-[83px]",
    },
    {
      id: 6,
      src: "/chatgpt-image-apr-10--2025-at-11-09-19-pm-photoroom-10-1.png",
      alt: "Chatgpt image apr",
      position: "top-[39px] left-[980px]",
      size: "w-[85px] h-[85px]",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center gap-8 px-16 py-0 h-[558px] w-full overflow-hidden">
      {/* Main heading */}
      <h1 className="relative font-['Lato',Helvetica] font-black text-[#000607] text-[120px] text-center tracking-[0] leading-[144.0px]">
        Secure. Transparent. <br />
        Built for trust.
      </h1>

      {/* Feature cards */}
      {featureCards.map((card) => (
        <Card
          key={card.id}
          className={`absolute ${card.position} w-[196px] bg-neutral-100 rounded-2xl border border-solid border-[#eaeaea] p-0`}
        >
          <CardContent className="flex flex-col items-start gap-4 p-6">
            <h3 className="self-stretch mt-[-1.00px] font-extra-large font-[number:var(--extra-large-font-weight)] text-[#000607] text-[length:var(--extra-large-font-size)] tracking-[var(--extra-large-letter-spacing)] leading-[var(--extra-large-line-height)] [font-style:var(--extra-large-font-style)]">
              {card.title}
            </h3>
            <p className="self-stretch font-body font-[number:var(--body-font-weight)] text-[#78909c] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}

      {/* Decorative images */}
      {decorativeImages.map((image) => (
        <img
          key={image.id}
          className={`absolute ${image.position} ${image.size}`}
          alt={image.alt}
          src={image.src}
        />
      ))}
    </section>
  );
};
