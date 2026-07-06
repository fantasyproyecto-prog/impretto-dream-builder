import { useEffect, useRef, useState } from "react";

import f1 from "@/assets/scrub/frame-01.jpg";
import f2 from "@/assets/scrub/frame-02.jpg";
import f3 from "@/assets/scrub/frame-03.jpg";
import f4 from "@/assets/scrub/frame-04.jpg";
import f5 from "@/assets/scrub/frame-05.jpg";
import f6 from "@/assets/scrub/frame-06.jpg";
import f7 from "@/assets/scrub/frame-07.jpg";
import f8 from "@/assets/scrub/frame-08.jpg";

const FRAMES = [f1, f2, f3, f4, f5, f6, f7, f8];

/**
 * Cinematic scroll-scrubbed canvas sequence — Apple-style transformation reveal.
 * Sticky 100vh canvas over a tall track. Scroll drives frame index.
 * Mobile / reduced-motion / low-bandwidth: static hero image fallback (no preload).
 */
export function CinematicScrub() {
  const trackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const progressRef = useRef(0);
  const currentFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [lite, setLite] = useState(true); // start lite; upgrade after mount if capable
  const [ready, setReady] = useState(false);

  // Detect capability once mounted (avoid SSR mismatch).
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    // Respect Save-Data / 2g-3g connections.
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = conn?.saveData || (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType));
    setLite(Boolean(reduce || narrow || slow));
  }, []);

  // Preload frame sequence (only in cinematic mode).
  useEffect(() => {
    if (lite) return;
    let cancelled = false;
    let loaded = 0;
    const imgs: HTMLImageElement[] = FRAMES.map((src, i) => {
      const img = new Image();
      img.decoding = "async";
      // First frame is critical; the rest can load lazily but eagerly enough for smoothness.
      img.loading = i === 0 ? "eager" : "eager";
      img.src = src;
      img.onload = () => {
        loaded += 1;
        if (i === 0 && !cancelled) {
          setReady(true);
          drawFrame(0);
        }
        if (loaded === FRAMES.length && !cancelled) {
          setReady(true);
        }
      };
      return img;
    });
    imagesRef.current = imgs;
    return () => {
      cancelled = true;
      imagesRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lite]);

  // Draw a specific frame index into the canvas at cover-fit.
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
    if (currentFrameRef.current === index) return;
    currentFrameRef.current = index;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    if (canvas.width !== cssW * dpr || canvas.height !== cssH * dpr) {
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // object-fit: cover math
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const cw = canvas.width;
    const ch = canvas.height;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // Scroll-driven progress + rAF-throttled frame update.
  useEffect(() => {
    if (lite) return;
    const track = trackRef.current;
    if (!track) return;

    const compute = () => {
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when section top reaches top of viewport; 1 when bottom reaches bottom.
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const p = total > 0 ? scrolled / total : 0;
      progressRef.current = p;
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          const p2 = progressRef.current;
          const idx = Math.min(
            FRAMES.length - 1,
            Math.max(0, Math.round(p2 * (FRAMES.length - 1))),
          );
          drawFrame(idx);
          setProgress(p2);
        });
      }
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [lite, ready]);

  // Text opacity curves.
  const introOpacity = clamp(1 - progress * 4, 0, 1);
  const midOpacity = clamp(1 - Math.abs(progress - 0.5) * 4, 0, 1);
  const ctaOpacity = clamp((progress - 0.7) / 0.25, 0, 1);

  return (
    <section
      aria-label="Cinematic bathroom transformation"
      className="relative bg-ink text-cream"
    >
      {lite ? (
        <div className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
          <img
            src={FRAMES[FRAMES.length - 1]}
            alt="Finished luxury bathroom by Impretto Home: marble walls, freestanding matte black tub, brushed brass fixtures"
            width={1600}
            height={900}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/70" />
          <LiteOverlay />
        </div>
      ) : (
        <div ref={trackRef} className="relative" style={{ height: "320vh" }}>
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <canvas
              ref={canvasRef}
              aria-hidden
              className="absolute inset-0 h-full w-full"
              style={{ background: "var(--ink)" }}
            />
            {/* Fallback img painted underneath for the split-second before first draw + a11y. */}
            <img
              src={FRAMES[0]}
              alt="Cinematic walk-through of a luxury bathroom remodel by Impretto Home"
              width={1600}
              height={900}
              className="absolute inset-0 h-full w-full object-cover opacity-0"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/10 to-ink/70" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
              <div
                style={{ opacity: introOpacity, transform: `translateY(${(1 - introOpacity) * 12}px)` }}
                className="transition-opacity duration-100 will-change-[opacity,transform]"
              >
                <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
                  The Impretto Walk-Through
                </span>
                <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  Scroll to step inside a{" "}
                  <em className="not-italic text-accent">finished remodel.</em>
                </h2>
              </div>

              <div
                style={{ opacity: midOpacity }}
                className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-6"
              >
                <p className="mx-auto max-w-xl font-display text-2xl leading-snug text-cream/90 sm:text-3xl">
                  Marble, brushed brass, warm oak — chosen together, installed with{" "}
                  <em className="not-italic text-accent">obsessive precision.</em>
                </p>
              </div>

              <div
                style={{ opacity: ctaOpacity, transform: `translateY(${(1 - ctaOpacity) * 16}px)` }}
                className="pointer-events-auto absolute bottom-16 flex flex-col items-center gap-4 transition-opacity"
              >
                <p className="font-display text-xl sm:text-2xl">Ready to walk through yours?</p>
                <a href="#contact" className="btn-brass text-base">
                  Get a Free Estimate
                </a>
              </div>

              {/* Scroll hint on entry */}
              <div
                style={{ opacity: introOpacity * 0.7 }}
                className="absolute bottom-8 text-[11px] uppercase tracking-[0.28em] text-cream/70"
              >
                Scroll ↓
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function LiteOverlay() {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow" style={{ color: "color-mix(in oklab, var(--cream) 70%, transparent)" }}>
        The Impretto Walk-Through
      </span>
      <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
        Step inside a <em className="not-italic text-accent">finished remodel.</em>
      </h2>
      <a href="#contact" className="btn-brass mt-8 text-base">
        Get a Free Estimate
      </a>
    </div>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}
