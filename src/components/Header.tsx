import Navbar from "./Navbar";
import Smoke from "../../public/assets/smoke.png";
import { useMouse } from "../hooks/useMouse";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const { x } = useMouse();

  const container = useRef<HTMLHeadElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const subtitle = useRef<HTMLParagraphElement>(null);
  const smokeRef = useRef<HTMLDivElement>(null);

  // Initial letter-by-letter animation when page loads with slower timing
  useEffect(() => {
    if (title.current && subtitle.current) {
      // Split text into characters
      const titleSplit = new SplitType(title.current, { types: "chars" });
      const subtitleSplit = new SplitType(subtitle.current, { types: "chars" });

      const tl = gsap.timeline();

      // Hide all characters initially
      gsap.set([titleSplit.chars, subtitleSplit.chars], {
        opacity: 0,
        y: 20,
      });

      // Animate title characters one by one with slower timing
      tl.to(titleSplit.chars, {
        opacity: 1,
        y: 0,
        duration: 0.7, // Increased from 0.5
        stagger: 0.12, // Increased from 0.05
        ease: "power2.out",
      })
        // Then animate subtitle characters with a slight delay
        .to(
          subtitleSplit.chars,
          {
            opacity: 1,
            y: 0,
            duration: 0.6, // Increased from 0.4
            stagger: 0.08, // Increased from 0.03
            ease: "power2.out",
          },
          "+=0.5"
        ); // Increased from 0.2
    }
  }, []);

  // Very slow parallax effect with mouse movement
  useGSAP(
    () => {
      gsap.to(title.current, {
        x: -x / 30,
        duration: 2.5,
        ease: "power1.out",
      });

      gsap.to(subtitle.current, {
        x: -x / 50,
        duration: 3,
        ease: "power1.out",
      });

      gsap.to(smokeRef.current, {
        x: -x / 15,
        duration: 3.5,
        ease: "power1.out",
      });
    },
    { scope: container, dependencies: [x] }
  );

  return (
    <>
      <Navbar />
      <header
        ref={container}
        className="relative bg-blue-50 h-dvh overflow-hidden hero"
      >
        <div className="flex justify-center items-center h-full text-white">
          <div
            ref={smokeRef}
            className="-bottom-24 left-0 absolute opacity-35 rotate-6"
          >
            <img src={Smoke} alt="smoke" />
          </div>
          <div className="mt-24 px-2">
            <h1
              ref={title}
              className="mb-2 font-bold text-5xl xss:text-6xl sm:text-7xl md:text-8xl text-center uppercase tracking-widest"
            >
              LEGENDES
            </h1>
            <p
              ref={subtitle}
              className="font-light text-lg xss:text-xl text-center tracking-widest"
            >
              New Album Available Now
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
