import { motion, useScroll } from "motion/react";

const ScrollYProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 5,
        originX: 0,
        backgroundColor: "#fff",
      }}
    />
  );
};

export default ScrollYProgress;
