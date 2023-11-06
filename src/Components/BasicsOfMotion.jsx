import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button className="e-button" layout onClick={() => setIsVisible(!isVisible)}>
        Show / Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 180, -120, -130, 0]
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            style={{ width: "150px", height: "150px", background: "black", borderRadius: "6px" }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
