import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedHeader = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }} // Start hidden above the viewport
      animate={isVisible ? { y: "0%", opacity: 1 } : {}} // Slide down and fade in when visible
      transition={{
        duration: 1, // 1-second duration
        ease: [0.6, 0.01, -0.05, 0.95], // Smooth easing function
      }}
    //   style={{
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     width: "100%",
    //     background: "#fff",
    //     zIndex: 1000,
    //     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    //   }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedHeader;
