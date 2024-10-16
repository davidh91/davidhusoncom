import { AnimatePresence, motion } from "framer-motion";

// I want a fade in bottom-up - fade out top-down animation
// so these are my variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const AnimatedLayout = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.25, type: "easeInOut" }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
