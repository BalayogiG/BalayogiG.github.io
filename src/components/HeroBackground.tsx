"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}

export default function HeroBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const full = fullRef.current;
    if (!wrap || !left || !right || !full) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollY = 0;
    let raf = 0;

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      const docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const t = Math.min(scrollY / docHeight, 1);

      const converge = easeOutCubic(Math.min(scrollY / 360, 1));
      const split = 1 - converge;

      const rotateY = currentX * 10;
      const rotateX = -currentY * 10;
      const parallaxY = scrollY * 0.35;
      const drift = t * 60 - 30;
      const scale = 1.45 + t * 0.25 + split * 0.35;
      const opacity = 0.6 - t * 0.22;

      const baseTransform = `translate3d(${currentX * -18 + drift}px, ${-parallaxY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

      const halvesOpacity = String(Math.max(opacity, 0.2) * (1 - converge));
      left.style.transform = `${baseTransform} translate(${-split * 140}px, 36px) rotate(${-split * 8}deg)`;
      left.style.opacity = halvesOpacity;

      right.style.transform = `${baseTransform} translate(${split * 140}px, 36px) rotate(${split * 8}deg)`;
      right.style.opacity = halvesOpacity;

      full.style.transform = `${baseTransform} translate(0px, 36px)`;
      full.style.opacity = String(Math.max(opacity, 0.2) * converge);

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      style={{ perspective: "1200px" }}
      aria-hidden
    >
      <div
        ref={leftRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: "scale(1.8)",
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
          clipPath: "inset(0 50% 0 0)",
        }}
      >
        <Image
          src="/hero-hands.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "51% 30%" }}
        />
      </div>
      <div
        ref={rightRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: "scale(1.8)",
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
          clipPath: "inset(0 0 0 50%)",
        }}
      >
        <Image
          src="/hero-hands.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "51% 30%" }}
        />
      </div>
      <div
        ref={fullRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: "scale(1.8)",
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
          opacity: 0,
        }}
      >
        <Image
          src="/hero-hands.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "51% 30%" }}
        />
      </div>
    </div>
  );
}
