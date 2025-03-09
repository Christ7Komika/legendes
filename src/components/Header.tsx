import Navbar from "./Navbar";
import Smoke from "../../public/assets/smoke.png";
import { useMouse } from "../hooks/useMouse";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const { x } = useMouse();
  console.log({ x });

  const container = useRef<HTMLHeadElement>(null);
  const title = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // or refs...
      gsap.to(title.current, { translateX: x / 2, duration: 3 });
    },
    { scope: container }
  );

  return (
    <header
      ref={container}
      className="relative bg-blue-50 h-dvh overflow-hidden hero"
    >
      <Navbar />
      <div className="flex justify-center items-center h-full text-white">
        <div className="-bottom-24 left-0 absolute opacity-35 rotate-6">
          <img src={Smoke} alt="smoke" />
        </div>
        <div className="mt-24 px-2">
          <h1
            ref={title}
            className="mb-2 font-bold text-5xl xss:text-6xl sm:text-7xl md:text-8xl text-center uppercase tracking-widest transition-all duration-700 ease-in-out"
            style={{
              transform: `translateX(${x / 2})`,
            }}
          >
            LEGENDES
          </h1>
          <p className="font-light text-lg xss:text-xl text-center tracking-widest">
            New Album Available Now
          </p>
        </div>
      </div>
    </header>
  );
}
