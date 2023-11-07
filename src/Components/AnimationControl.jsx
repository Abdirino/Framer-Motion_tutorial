import { motion, useAnimationControls } from "framer-motion";
const AnimationControl = () => {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("flip");
  };
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      {" "}
      <button onClick={handleClick} className="e-button">
        Flip it!
      </button>
      <motion.div
        style={{
          width: 200,
          height: 200,
          background: "green",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "420deg",
          },
        }}
        initial="initial"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControl;
