import React from "react";

// Define the footer navigation data for reusability
const footerNavData = [
  {
    title: "Odos",
    links: [
      { text: "About us", href: "#" },
      { text: "Contact us", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { text: "Launch dApp", href: "#" },
      { text: "Loyalty Program", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { text: "Odos APIs", href: "#" },
      { text: "Developers", href: "#" },
    ],
  },
];

// Define social media links
const socialLinks = [
  { icon: "/i/ Discord copy.svg", alt: "Discord icon", href: "#" },
  { icon: "/i/ X copy.svg", alt: "X icon", href: "#" },
  { icon: "/i/ Telegram copy.svg", alt: "Telegram icon", href: "#" },
];

// Define footer legal links
const legalLinks = [
  { text: "Privacy Policy", href: "#" },
  { text: "Terms of Use", href: "#" },
  { text: "Cookie Policy", href: "#" },
];

export const MainLandingSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#fcfcfc]">
      <div className="flex flex-col w-full items-start gap-32 p-8 bg-neutral-100">
        <div className="flex items-start gap-16 w-full">
          {/* Logo and tagline */}
          <div className="flex flex-col items-start gap-4 flex-1">
            <img className="w-32 h-11" alt="Odos logo" src="/i/odos Logo copy.svg" />
            <p className="font-body font-[number:var(--body-font-weight)] text-[#78909c] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
              The Optimal Order <br />
              Routing Solution
            </p>
          </div>

          {/* Navigation columns */}
          {footerNavData.map((column, index) => (
            <div key={index} className="flex-1 flex items-center">
              <div className="flex flex-col items-start gap-3">
                <h3 className="self-stretch mt-[-1.00px] font-body font-[number:var(--body-font-weight)] text-[#000607] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                  {column.title}
                </h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="self-stretch font-small font-[number:var(--small-font-weight)] text-[#527382] text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] [font-style:var(--small-font-style)]"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Social media icons */}
          <div className="flex items-start justify-end gap-16 flex-1">
            <div className="flex items-center gap-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href}>
                  <img className="w-6 h-6" alt={social.alt} src={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="flex justify-between items-center w-full">
          <p className="font-extra-small font-[number:var(--extra-small-font-weight)] text-[#78909c] text-[length:var(--extra-small-font-size)] text-center tracking-[var(--extra-small-letter-spacing)] leading-[var(--extra-small-line-height)] whitespace-nowrap [font-style:var(--extra-small-font-style)]">
            ©2025 Odos All Rights Reserved.
          </p>

          <div className="flex items-center gap-8">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-extra-small font-[number:var(--extra-small-font-weight)] text-[#527382] text-[length:var(--extra-small-font-size)] text-center tracking-[var(--extra-small-letter-spacing)] leading-[var(--extra-small-line-height)] whitespace-nowrap [font-style:var(--extra-small-font-style)]"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};