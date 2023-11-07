import { motion } from "framer-motion";

const ViewBaseAnimation = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "160vh",
          gap: "0.8rem",
        }}
      ></div>
      <motion.div
        style={{ width: "100%", height: "50vh", background: "aqua" }}
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </>
  );
};

export default ViewBaseAnimation;
