import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationBarSection = (): JSX.Element => {
  const navItems = [
    { label: "About", href: "#" },
    { label: "Loyalty", href: "#" },
    { label: "Developers", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex w-full h-20 items-center justify-between px-8 py-0 bg-white/80 backdrop-blur-sm">
      {/* Logo */}
      <img
        className="relative w-32 h-11"
        alt="Odos logo"
        src="/i/odos Logo.svg"
      />

      {/* Navigation Menu */}
      <NavigationMenu className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <NavigationMenuList className="flex items-center gap-12">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className="inline-flex h-8 items-center gap-1 font-body-bold text-[#527382]"
                href={item.href}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right side actions */}
      <div className="flex items-center gap-6">
        {/* Language selector */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img className="w-5 h-5" alt="Globe icon" src="/i/globe.svg" />
          <span className="text-[#527382]">Eng</span>
          <ChevronDownIcon className="w-5 h-5 text-[#527382]" />
        </div>

        {/* Launch Odos button */}
        <Button size="sm" className="bg-[#f57d0f] text-white rounded-[6px]">
          <img className="w-5 h-5" alt="Odos icon" src="/i/Odos.svg" />
          Launch Odos
        </Button>
      </div>
    </header>
  );
};