import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
  duration?: number; // duration in seconds
  animation?: "fadeInUp" | "fadeInDown" | "fadeInScale" | "fadeIn";
  threshold?: number; // 0 to 1
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  animation = "fadeInUp",
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
      transitionDelay: `${delay}ms`,
      willChange: "opacity, transform",
    };

    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "translate3d(0, 32px, 0)",
          };
        case "fadeInDown":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "translate3d(0, -32px, 0)",
          };
        case "fadeInScale":
          return {
            ...baseStyle,
            opacity: 0,
            transform: "scale(0.94)",
          };
        case "fadeIn":
        default:
          return {
            ...baseStyle,
            opacity: 0,
          };
      }
    }

    return {
      ...baseStyle,
      opacity: 1,
      transform: "translate3d(0, 0, 0) scale(1)",
    };
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  );
}
