import { motion } from "framer-motion";

const ScrollingText = () => {
  return (
    <div className="space-y-4 overflow-hidden py-10 bg-background">
      <ScrollingLine direction="left" />
      <ScrollingLine direction="right" />
      <ScrollingLine direction="left" />
    </div>
  );
};

const ScrollingLine = ({ direction = "left" }) => {
  const isLeft = direction === "left";
  const text = (
    <span className="text-8xl font-bold text-white flex gap-10">
      <span>
        <span className="text-primary">Real </span>Results
        <span className="text-primary">.</span>
      </span>
      <span>
        <span className="text-primary">Real </span>Calls
        <span className="text-primary">.</span>
      </span>
    </span>
  );

  return (
    <motion.div
      className="flex whitespace-nowrap gap-10"
      initial={{ x: isLeft ? "100%" : "-100%" }}
      animate={{ x: isLeft ? "-100%" : "100%" }}
      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>{text}</div>
      ))}
    </motion.div>
  );
};

export default ScrollingText;
