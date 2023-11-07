import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.99, rotate: "3deg" }}
          className="e-button"
        >
          Click Me.
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
