import React, { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import Header from "./Header";
import Footer from "./Footer";
import SeminarModal from "./SeminarModal";
import StickyMobileBar from "./StickyMobileBar";
import Breadcrumbs from "./Breadcrumbs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname, search } = useLocation();
  const [isSeminarModalOpen, setIsSeminarModalOpen] = useState(false);

  // Check URL query params or pathname for QR code scan triggers & direct seminar links
  useEffect(() => {
    const params = new URLSearchParams(search);
    const formParam = params.get("form");
    const qrParam = params.get("qr");
    const scanParam = params.get("scan");
    const cleanPath = pathname.toLowerCase().replace(/\/$/, "");

    if (
      formParam === "seminar" ||
      qrParam === "1" ||
      qrParam === "true" ||
      scanParam === "true" ||
      cleanPath === "/seminar" ||
      cleanPath === "/seminar-form"
    ) {
      setIsSeminarModalOpen(true);
    }
  }, [search, pathname]);

  // Listen for custom window event to trigger seminar popup modal manually
  useEffect(() => {
    const handleOpenSeminar = () => setIsSeminarModalOpen(true);
    window.addEventListener("openSeminarModal", handleOpenSeminar);
    return () => window.removeEventListener("openSeminarModal", handleOpenSeminar);
  }, []);

  // Load Tawk.to Script with native customStyle offsets & mobile hiding
  useEffect(() => {
    const Tawk_API = (window as any).Tawk_API || {};
    Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: "br",
          xOffset: 24,
          yOffset: 90,
        },
        mobile: {
          position: "br",
          xOffset: 20,
          yOffset: 145,
        },
      },
    };

    const updateTawkVisibility = () => {
      const isMobile = window.innerWidth < 1024;
      try {
        const api = (window as any).Tawk_API;
        if (api && typeof api.hideWidget === "function" && typeof api.showWidget === "function") {
          if (isMobile) {
            api.hideWidget();
          } else {
            api.showWidget();
          }
        }
      } catch (err) {}

      // Direct DOM manipulation fallback for guaranteed mobile suppression
      const elements = document.querySelectorAll(
        'iframe[src*="tawk.to"], iframe[title*="chat"], iframe[title*="tawk"], iframe[title*="Tawk"], #tawkchat-container, .tawk-min-container, [id^="tawk"], [class*="tawk"]'
      );
      elements.forEach((el: any) => {
        if (isMobile) {
          el.style.setProperty("display", "none", "important");
          el.style.setProperty("visibility", "hidden", "important");
          el.style.setProperty("opacity", "0", "important");
          el.style.setProperty("pointer-events", "none", "important");
          if (el.parentElement && el.parentElement !== document.body) {
            el.parentElement.style.setProperty("display", "none", "important");
          }
        } else {
          el.style.removeProperty("display");
          el.style.removeProperty("visibility");
          el.style.removeProperty("opacity");
          el.style.removeProperty("pointer-events");
          if (el.parentElement && el.parentElement !== document.body) {
            el.parentElement.style.removeProperty("display");
          }
        }
      });
    };

    Tawk_API.onLoad = updateTawkVisibility;
    (window as any).Tawk_API = Tawk_API;
    (window as any).Tawk_LoadStart = new Date();

    window.addEventListener("resize", updateTawkVisibility);

    // Periodic check to catch async iframe insertions
    const interval = setInterval(updateTawkVisibility, 500);

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5f2e9e94ed9d9d262709321f/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    return () => {
      window.removeEventListener("resize", updateTawkVisibility);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Automatically attach IntersectionObserver to sections for lazy load scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lazy-section-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    // Query all sections and main cards
    const elements = document.querySelectorAll("section, article, .lazy-reveal");
    elements.forEach((el) => {
      if (!el.classList.contains("lazy-section-visible")) {
        el.classList.add("lazy-section-init");
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname, children]);

  if (pathname === "/thank-you") {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-indigo-500 selection:text-white antialiased relative overflow-x-clip pb-14 md:pb-0">
      {/* Premium background mesh gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.06),transparent_50%)] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header Navigation */}
      <Header />

      {/* Main page content wrapper */}
      <main className="flex-grow z-10 relative">
        {children}
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Sticky Mobile Action Bar */}
      <StickyMobileBar />

      {/* QR Code Seminar Modal */}
      <SeminarModal
        isOpen={isSeminarModalOpen}
        onClose={() => setIsSeminarModalOpen(false)}
      />
    </div>
  );
}

