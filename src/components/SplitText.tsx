import React, { useEffect } from "react";
import { motion, useAnimation, Variant, Easing } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: Easing | Easing[];
  splitType?: "chars";
  from?: Variant;
  to?: Variant;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "center" | "left" | "right";
  onLetterAnimationComplete?: () => void;
};

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 50,
  duration = 0.4,
  ease = "easeOut",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left",
  onLetterAnimationComplete,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible").then(() => {
        onLetterAnimationComplete?.();
      });
    }
  }, [controls, inView, onLetterAnimationComplete]);

  const letters = text.split("");

  const justifyMap: Record<"left" | "center" | "right", string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap ${justifyMap[textAlign]} ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={{ visible: to }} // Variant defined
          initial="hidden" // use a string label
          animate={controls}
          transition={{
            delay: index * (delay / 1000),
            duration,
            ease,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;
