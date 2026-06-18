"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type LandingExperienceProps = {
  children: ReactNode;
};

export default function LandingExperience({ children }: LandingExperienceProps) {
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scopeRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { duration: 0.75, ease: "power3.out" },
      });

      intro
        .from("[data-animate='nav']", { autoAlpha: 0, y: -18 })
        .from("[data-animate='hero-kicker']", { autoAlpha: 0, y: 18 }, "-=0.35")
        .from("[data-animate='hero-title']", { autoAlpha: 0, y: 36 }, "-=0.35")
        .from("[data-animate='hero-copy']", { autoAlpha: 0, y: 24 }, "-=0.35")
        .from("[data-animate='hero-cta']", { autoAlpha: 0, y: 18 }, "-=0.35")
        .from(".hero-window", { autoAlpha: 0, y: 36, stagger: 0.12 }, "-=0.6")
        .from(".hero-flow", { autoAlpha: 0, scaleX: 0.84 }, "-=0.5");

      gsap.to(".floating-window", {
        y: -16,
        rotation: 0.6,
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
      });

      gsap.to(".pulse-node", {
        scale: 1.12,
        duration: 1.25,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
      });

      gsap.to(".scene-layer", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 46,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".metric-fill").forEach((element) => {
        gsap.from(element, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".service-card").forEach((card) => {
        const browser = card.querySelector(".mini-browser");
        const browserLines = card.querySelectorAll(".mini-lines span");
        const dashboardTiles = card.querySelectorAll(".mini-dashboard span");
        const workflowNodes = card.querySelectorAll(".mini-workflow span");
        const workflowConnectors = card.querySelectorAll(".mini-workflow i");
        const glow = document.getElementById("cursorGlow");
          window.addEventListener("mousemove", (e) => {
            gsap.to(glow, {
              x: e.clientX - 250,
              y: e.clientY - 250,
              duration: 1,
              ease: "power3.out",
            });
            gsap.to(".hero-orb-1", {
  x: 250,
  y: -150,
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".hero-orb-2", {
  x: -200,
  y: 200,
  duration: 15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".hero-orb-3", {
  x: 150,
  y: 120,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
gsap.to(".gooey-background span", {
  x: "random(-200,200)",
  y: "random(-200,200)",
  duration: 10,
  repeat: -1,
  yoyo: true,
  stagger: 1,
  ease: "sine.inOut",
});
          });
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
          },
          defaults: { ease: "power3.out" },
        });

        if (browser) {
          timeline
            .from(browser, { autoAlpha: 0, y: 22, duration: 0.5 })
            .from(
              card.querySelector(".mini-top"),
              { scaleX: 0, transformOrigin: "left center", duration: 0.35 },
              "-=0.18",
            )
            .from(
              card.querySelector(".mini-hero"),
              { scaleX: 0, transformOrigin: "left center", duration: 0.45 },
              "-=0.08",
            )
            .from(
              browserLines,
              {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.32,
                stagger: 0.08,
              },
              "-=0.12",
            )
            .from(
              card.querySelector(".mini-cta"),
              { autoAlpha: 0, scale: 0.72, duration: 0.32 },
              "-=0.05",
            );
        }

        if (dashboardTiles.length) {
          timeline.from(dashboardTiles, {
            autoAlpha: 0,
            y: 24,
            scale: 0.94,
            duration: 0.58,
            stagger: 0.08,
          });

          gsap.to(dashboardTiles, {
            y: -7,
            duration: 1.8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.16,
          });
        }

        if (workflowNodes.length) {
          timeline
            .from(workflowNodes, {
              autoAlpha: 0,
              scale: 0.55,
              duration: 0.42,
              stagger: 0.12,
            })
            .from(
              workflowConnectors,
              {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.48,
                stagger: 0.12,
              },
              "-=0.25",
            );

          gsap.to(workflowConnectors, {
            opacity: 0.35,
            duration: 1.2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.18,
          });
        }
      });

      gsap.utils.toArray<HTMLElement>(".process-step, .offer-card").forEach(
        (element) => {
          gsap.from(element, {
            autoAlpha: 0,
            y: 34,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
            },
          });
        },
      );
    }, scopeRef);

    return () => context.revert();
  }, []);

  return <div ref={scopeRef}>{children}</div>;
}
