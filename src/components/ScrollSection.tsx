import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  className = "",
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`min-h-screen relative flex items-center justify-center ${className}`}
    >
      {children}
    </motion.section>
  );
};