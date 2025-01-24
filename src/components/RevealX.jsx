
import { useRef } from "react";
import { useInView } from "framer-motion";
export default function RevealX({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div className="section" ref={ref}>
        <span
          className="block opacity-0 -translate-x-[100px]"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </div>
    );
  }