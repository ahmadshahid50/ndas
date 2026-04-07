"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if mobile/tablet on mount
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    gsap.set([cursor, cursorBorder], { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });
    const xToBorder = gsap.quickTo(cursorBorder, "x", { duration: 0.5, ease: "power3.out" });
    const yToBorder = gsap.quickTo(cursorBorder, "y", { duration: 0.5, ease: "power3.out" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    const handleMouseDown = () => {
      gsap.to([cursor, cursorBorder], { scale: 0.65, duration: 0.2 });
    };

    const handleMouseUp = () => {
      gsap.to([cursor, cursorBorder], { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      { }
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-9999"
      />
      
      { }
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[27px] h-[27px] border border-black rounded-full pointer-events-none z-9999 opacity-50"
      />
    </>
  );
}
